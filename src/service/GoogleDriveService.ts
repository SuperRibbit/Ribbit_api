import { google } from "googleapis";
import fs from "fs";
import { Readable } from "stream";
import { AppError } from "../utils/AppError.js";
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;
const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN!;
const FOLDER_ID = process.env.GOOGLE_DRIVE_FOLDER_ID!;

export class GoogleDriveService {
  private drive;

  constructor() {
    const oauth2Client = new google.auth.OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );

    oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

    this.drive = google.drive({ version: "v3", auth: oauth2Client });
  }

  async uploadFile(filePath: string | Buffer, fileName: string,mimeType: string = "application/pdf"): Promise<string> {
    try {
      const fileMetadata = {
        name: fileName,
        parents: [FOLDER_ID],
      };
      
      const bodyStream = typeof filePath === "string" 
        ? fs.createReadStream(filePath) 
        : Readable.from(filePath);

      const media = {
        mimeType: mimeType,
        body: bodyStream,
      };

      const response = await this.drive.files.create({
        requestBody: fileMetadata,
        media: media,
        fields: "id, webViewLink",
      });

      const fileId = response.data.id!;

      await this.drive.permissions.create({
        fileId: fileId,
        requestBody: {
          role: "reader",
          type: "anyone",
        },
      });

      return response.data.webViewLink!;
    } catch (error: any) {
      console.error("Erro detalhado do Google Drive:", error.response?.data?.error || error.message);
      throw new Error("Falha ao enviar arquivo para a nuvem.");
    }
  }

  async uploadMulterFile(
    file: Express.Multer.File,
    defaultFileName: string,
    mimeType = "image/jpeg"
  ): Promise<string> {
    const fileData = file.path || file.buffer;
    if (!fileData) {
      throw new AppError(
        "Arquivo recebido, mas os dados estão vazios (sem path e sem buffer). Verifique o envio no Postman.",
        400
      );
    }

    try {
      return await this.uploadFile(
        fileData,
        file.originalname || defaultFileName,
        file.mimetype || mimeType
      );
    } finally {
      if (file.path && fs.existsSync(file.path)) {
        fs.unlinkSync(file.path);
      }
    }
  }
}