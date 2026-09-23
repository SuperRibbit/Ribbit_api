import { Route, Tags, Controller, Post, FormField, UploadedFile, SuccessResponse, Response, Security, Body, Delete, Path, Request } from "tsoa";
import { GoogleDriveService } from "../service/GoogleDriveService.js";
import { ClassFileService } from "../service/ClassFileService.js";
import type { ClassFileResponse, UploadVideoLinkRequest, ClassFileActionResponse } from "../dto/ClassFileDtos.js";
import { AppError } from "../utils/AppError.js";
import type { AuthRequest } from "../types/express.js";

import fs from "fs";
import path from "path";
import os from "os";

@Route("ribbit/files")
@Tags("Class Files")
export class ClassFileController extends Controller {
  private driveService = new GoogleDriveService();
  private dbService = new ClassFileService();

  @Post("pdf")
  @SuccessResponse("201", "PDF enviado e salvo com sucesso!")
  @Response("400", "Erro de validação")
  @Response("404", "Aula não encontrada")
  @Response("403", "Sem permissão para modificar este curso")
  @Security("bearerAuth", ["prof", "admin"]) 
  public async uploadClassPDF(
    @Request() req: AuthRequest,
    @UploadedFile() file: Express.Multer.File,
    @FormField() class_id: number,             
    @FormField() display_name: string
  ): Promise<ClassFileActionResponse> {
    
    if (!class_id) {
      throw new AppError("O class_id é obrigatório.", 400);
    }

    await this.dbService.ensureCanModifyClass(
      class_id,
      { id: req.user!.id, role: req.user!.role }
    );

    const tempFilePath = path.join(os.tmpdir(), file.originalname || "upload.pdf");
    
    try {
      fs.writeFileSync(tempFilePath, file.buffer);
      const finalName = display_name || file.originalname;
      const driveUrl = await this.driveService.uploadFile(tempFilePath, finalName);

      const newFileRecord = await this.dbService.saveFileRecord({
        display_name: finalName,
        file_url: driveUrl,
        class_id: class_id,
      });

      this.setStatus(201);
      return {
        message: "Arquivo enviado com sucesso!",
        file: newFileRecord as unknown as ClassFileResponse
      };

    } catch (error: any) {
      if (error instanceof AppError) throw error;
      throw new AppError("Ocorreu um erro ao processar e salvar o seu PDF. Tente novamente.", 500);
    } finally {
      if (fs.existsSync(tempFilePath)) {
        fs.unlinkSync(tempFilePath);
      }
    }
  }

  @Post("link")
  @SuccessResponse("201", "Link salvo com sucesso!")
  @Response("400", "Dados inválidos")
  @Response("404", "Aula não encontrada")
  @Response("403", "Sem permissão para modificar este curso")
  @Security("bearerAuth", ["prof", "admin"]) 
  public async uploadVideoLink(
    @Request() req: AuthRequest,
    @Body() requestBody: UploadVideoLinkRequest
  ): Promise<ClassFileActionResponse> {
    
    const { class_id, url, display_name } = requestBody;
    await this.dbService.ensureCanModifyClass(
      class_id,
      { id: req.user!.id, role: req.user!.role }
    );

   try {
      const newLinkRecord = await this.dbService.saveLinkRecord({
        display_name: display_name,
        file_url: url,
        class_id: class_id,
      });

      this.setStatus(201);
      return {
        message: "Link de vídeo salvo com sucesso!",
        file: newLinkRecord as unknown as ClassFileResponse
      };

    } catch (error: any) {
      if (error instanceof AppError) throw error;
      throw new AppError("Erro inesperado ao salvar o link do vídeo.", 500);
    }
  }

  @Delete("{file_id}")
  @SuccessResponse("204", "No Content")
  @Response("404", "Arquivo não encontrado")
  @Response("403", "Sem permissão para modificar este curso")
  @Security("bearerAuth", ["prof", "admin"]) 
  public async deleteFile(
    @Path() file_id: number,
    @Request() req: AuthRequest
  ): Promise<void> {
    await this.dbService.deleteFileRecord(
      file_id,
      { id: req.user!.id, role: req.user!.role }
    );
    this.setStatus(204);
  }
}
