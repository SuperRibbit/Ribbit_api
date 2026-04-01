import type { Request, Response } from "express";
import { GoogleDriveService } from "../service/GoogleDriveService.js";
import { ClassFileService } from "../service/ClassFileService.js";
import fs from "fs";

export class ClassFileController {
  private driveService = new GoogleDriveService();
  private dbService = new ClassFileService();

  async uploadClassPDF(req: Request, res: Response): Promise<void> {
    try {
      const file = req.file;
      const { class_id, display_name } = req.body;

      if (!file) {
         res.status(400).json({ message: "Nenhum arquivo PDF foi enviado." });
         return;
      }
      if (!class_id) {
         fs.unlinkSync(file.path);
         res.status(400).json({ message: "O class_id é obrigatório." });
         return;
      }

      const parsedClassId = parseInt(class_id);
      const classExists = await this.dbService.checkClassExists(parsedClassId);

      if (!classExists) {
        fs.unlinkSync(file.path);

        res.status(404).json({ 
          message: `Nenhuma aula encontrada com o ID ${parsedClassId}. O upload foi cancelado.` 
        });
        return;
      }

      const finalName = display_name || file.originalname;
      const driveUrl = await this.driveService.uploadFile(file.path, finalName);
      const newFileRecord = await this.dbService.saveFileRecord({
        display_name: finalName,
        file_url: driveUrl,
        class_id: parsedClassId,
      });

      fs.unlinkSync(file.path);

      res.status(201).json({
        message: "PDF enviado e salvo com sucesso!",
        file: newFileRecord,
      });

    } catch (error: any) {
      if (req.file && fs.existsSync(req.file.path)) {
        fs.unlinkSync(req.file.path);
      }
      res.status(500).json({ message: error.message || "Erro interno no servidor." });
    }
  }
}