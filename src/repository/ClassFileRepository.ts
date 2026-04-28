import { prisma } from "../server.js";
import type { Class_file } from "../generated/prisma/index.js";

export class ClassFileRepository {
    async findCourseClassById(class_id: number) {
        return await prisma.course_class.findUnique({
            where: { class_id }
        });
    }

    async create(data: {
        display_name: string;
        storage_path: string;
        file_url: string;
        file_type: string;
        class_id: number
    }): Promise<Class_file> {
        return await prisma.class_file.create({
            data
        });
    }
    
    async findById(file_id: number) {
        return await prisma.class_file.findUnique({
            where: { file_id }
        });
    }

    async deleteById(file_id: number) {
        return await prisma.class_file.delete({
            where: { file_id }
        });
    }
}