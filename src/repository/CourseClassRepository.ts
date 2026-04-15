import type { Prisma, Course_class } from "../generated/prisma/index.js";
import { prisma } from "../server.js";

export class CourseClassRepository {
    private static instance: CourseClassRepository;

    static getInstance(): CourseClassRepository {
        if (!this.instance) {
            this.instance = new CourseClassRepository();
        }
        return this.instance;
    }

    async findByID(class_id: number): Promise<Course_class | null> {
        return await prisma.course_class.findUnique({ where: { class_id } });
    }

    async create(data: Prisma.Course_classCreateInput): Promise<Course_class> {
        const created = await prisma.course_class.create({ data });
        console.log("Aula criada com sucesso: ", created);
        return created;
    }

    async update(class_id: number, data: Prisma.Course_classUpdateInput): Promise<Course_class> {
        const update = await prisma.course_class.update({ where: { class_id }, data});
        console.log("Aula atualizada com sucesso: ", update);
        return update;
    }

    async deleteById(class_id: number): Promise<Course_class> {
        const deleted = await prisma.course_class.delete({ where: { class_id }});
        console.log("Aula removida com sucesso: ", deleted);
        return deleted;
    }
}