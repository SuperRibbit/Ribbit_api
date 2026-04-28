import { ClassFileRepository } from "../repository/ClassFileRepository.js";
import { AppError } from "../utils/AppError.js";

export class ClassFileService {
  private repository = new ClassFileRepository();

  async checkClassExists(class_id: number): Promise<boolean> {
    const courseClass = await this.repository.findCourseClassById(class_id);
    return courseClass !== null;
  }

  private isValidVideoUrl(url: string): boolean {
    try {
      const parsedUrl = new URL(url);
      if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') return false;
      const videoRegex = /(youtube\.com|youtu\.be|vimeo\.com)|\.(mp4|webm|ogg)$/i;
      return videoRegex.test(url);
    } catch (error) {
      return false; 
    }
  }

  async saveFileRecord(data: { display_name: string; file_url: string; class_id: number }) {
    return await this.repository.create({
      display_name: data.display_name,
      storage_path: "google_drive",
      file_url: data.file_url,
      file_type: "application/pdf",
      class_id: data.class_id,
    });
  }

  async saveLinkRecord(data: { display_name: string; file_url: string; class_id: number }) {

    if (!this.isValidVideoUrl(data.file_url)) {
      throw new AppError("O link fornecido não é uma URL de vídeo válida. Formatos aceitos: YouTube ou Vimeo.", 400);
    }
    
    return await this.repository.create({
      display_name: data.display_name,
      storage_path: "external_link",
      file_url: data.file_url,
      file_type: "video_link",
      class_id: data.class_id,
    });
  }

  async deleteFileRecord(file_id: number): Promise<void> {
    const file = await this.repository.findById(file_id);

    if (!file) {
      throw new AppError("O arquivo solicitado não existe ou já foi excluído.", 404);
    }

    await this.repository.deleteById(file_id);
  }
}