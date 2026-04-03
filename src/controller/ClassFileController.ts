import { Route, Tags, Controller, Post, FormField, UploadedFile, SuccessResponse, Response, Security, Body } from "tsoa";
import { GoogleDriveService } from "../service/GoogleDriveService.js";
import { ClassFileService } from "../service/ClassFileService.js";
import type { ClassFileResponse, UploadVideoLinkRequest } from "../dto/ClassFileDtos.js";

import fs from "fs";
import path from "path";
import os from "os";

@Route("ribbit/classes/files")
@Tags("Class Files")
export class ClassFileController extends Controller {
  private driveService = new GoogleDriveService();
  private dbService = new ClassFileService();

  @Post("pdf")
  @SuccessResponse("201", "PDF enviado e salvo com sucesso!")
  @Response("400", "Erro de validação")
  @Response("404", "Aula não encontrada")
  @Security("bearerAuth", ["prof"]) 
  public async uploadClassPDF(
    @UploadedFile() file: Express.Multer.File,
    @FormField() class_id: number,             
    @FormField() display_name: string
  ): Promise<ClassFileResponse> {
    
    const tempFilePath = path.join(os.tmpdir(), file.originalname || "upload.pdf");
    
    try {
      fs.writeFileSync(tempFilePath, file.buffer);

      if (!class_id) {
        this.setStatus(400);
        throw new Error("O class_id é obrigatório.");
      }

      
      const classExists = await this.dbService.checkClassExists(class_id);

      if (!classExists) {
        this.setStatus(404);
        throw new Error(`Nenhuma aula encontrada com o ID ${class_id}. O upload foi cancelado.`);
      }

      const finalName = display_name || file.originalname;
      const driveUrl = await this.driveService.uploadFile(tempFilePath, finalName);
      
      const newFileRecord = await this.dbService.saveFileRecord({
        display_name: finalName,
        file_url: driveUrl,
        class_id: class_id,
      });

      fs.unlinkSync(tempFilePath);

      this.setStatus(201);
      return newFileRecord as unknown as ClassFileResponse;

    } catch (error: any) {
      if (fs.existsSync(tempFilePath)) {
        fs.unlinkSync(tempFilePath);
      }
      throw error; 
    }
  }

  @Post("link")
  @SuccessResponse("201", "Link salvo com sucesso!")
  @Response("400", "Dados inválidos")
  @Response("404", "Aula não encontrada")
  @Security("bearerAuth", ["prof"]) 
  public async uploadVideoLink(
    @Body() requestBody: UploadVideoLinkRequest
  ): Promise<ClassFileResponse> {
    
    const { class_id, url, display_name } = requestBody;
    const classExists = await this.dbService.checkClassExists(class_id);

    if (!classExists) {
      this.setStatus(404);
      throw new Error(`Nenhuma aula encontrada com o ID ${class_id}. O upload do link foi cancelado.`);
    }

   try {
      const newLinkRecord = await this.dbService.saveLinkRecord({
        display_name: display_name,
        file_url: url,
        class_id: class_id,
      });

      this.setStatus(201);
      return newLinkRecord as unknown as ClassFileResponse;

    } catch (error: any) {
      if (error.message === "INVALID_URL") {
        this.setStatus(400);
        throw new Error("O link fornecido não é uma URL de vídeo válida. Formatos aceitos: YouTube, Vimeo ou links diretos.");
      }
      throw error;
    }
  }
}