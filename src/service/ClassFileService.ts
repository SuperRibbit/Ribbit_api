import { ClassFileRepository } from "../repository/ClassFileRepository.js";

export class ClassFileService {
  private repository = new ClassFileRepository();

  async checkClassExists(class_id: number): Promise<boolean> {
    const courseClass = await this.repository.findCourseClassById(class_id);
    return courseClass !== null;
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
    return await this.repository.create({
      display_name: data.display_name,
      storage_path: "external_link",
      file_url: data.file_url,
      file_type: "video_link",
      class_id: data.class_id,
    });
  }
}