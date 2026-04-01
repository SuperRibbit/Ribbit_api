import { prisma } from "../server.js";

export class ClassFileService {

  async checkClassExists(class_id: number): Promise<boolean> {
    const courseClass = await prisma.course_class.findUnique({
      where: { class_id: class_id }
    });
    
    return courseClass !== null; 
  }

  async saveFileRecord(data: { display_name: string; file_url: string; class_id: number }) {
    return await prisma.class_file.create({
      data: {
        display_name: data.display_name,
        storage_path: "google_drive",
        file_url: data.file_url,
        file_type: "application/pdf",
        class_id: data.class_id,
      },
    });
  }
}