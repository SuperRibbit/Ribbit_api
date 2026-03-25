import type { Prisma } from "../generated/prisma/index.js";
import type { course } from "../generated/prisma/index.js";
import { prisma } from "../server.js";

export class CourseRepository{
    private static instance: CourseRepository;

    static getInstance(): CourseRepository {
        if (!this.instance) {
          this.instance = new CourseRepository();
        }
        return this.instance;
    }

    async findAll(): Promise<course[]> {
        return await prisma.course.findMany();
    }

    async findById(id: number): Promise<course | null> {
        return await prisma.course.findUnique({ where: { id_course: id } });
    }

    async findByTitle(title: string): Promise<course | null> {
        return await prisma.course.findFirst({ where: { title }})
    }

    async createCourse(courseData: Prisma.courseCreateInput): Promise<course | null> {
        const course = await prisma.course.create({ data: courseData });
        console.log("Curso criado com sucesso: ", course);
        return course;
    }

    async updateCourse(id: number, courseData: Prisma.courseUpdateInput): Promise<course | null> {
        const updatedCourse = await prisma.course.update({ where: { id_course: id }, data: courseData });
        console.log("Curso atualizado com sucesso: ", updatedCourse);
        return updatedCourse;
    }

    async deleteById(id: number): Promise<course | null> {
        const deletedCourse = await prisma.course.delete({ where: { id_course: id } });
        console.log("Curso removido com sucesso: ", deletedCourse);
        return deletedCourse;
    }
}