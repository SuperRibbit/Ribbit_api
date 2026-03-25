import type { course, Prisma } from "../generated/prisma/index.js";
import { CourseRepository } from "../repository/CourseRepository.js";

export class CourseService {
    private courseRepository = CourseRepository.getInstance();

    async findAll(): Promise<course[]> {
        return await this.courseRepository.findAll();
    }

    async findById(id: number | undefined): Promise<course> {
        if (!id) {
          throw new Error("Curso não encontrado");
        }
    
        const course = await this.courseRepository.findById(id);
    
        if (!course) {
          throw new Error("Curso não encontrado");
        }
        return course;
    }

    async findByTitle(title: string | undefined): Promise<course> {
        if (!title) {
          throw new Error("Curso não encontrado");
        }
    
        const course = await this.courseRepository.findByTitle(title);
    
        if (!course) {
          throw new Error("Curso não encontrado");
        }
        return course;
    }

    async createCourse(courseData: any): Promise<course | null> {
        const { title, description, banner_url, slug, teacherId } = courseData;
      
        const existingCourse = await this.courseRepository.findByTitle(title);
        if (existingCourse) {
          throw new Error("Curso já cadastrado");
        }
      
        const courseCreateInput: Prisma.courseCreateInput = {
          title,
          description,
          banner_url,
          slug,
          users: {
            connect: {
              user_uuid: teacherId
            }
          }
        };
      
        return await this.courseRepository.createCourse(courseCreateInput);
    }

    async updateCourse(id: number | undefined, courseData: Prisma.courseUpdateInput): Promise<course | null> {
        if (!id) {
          throw new Error("Curso não encontrado");
        }
    
        return await this.courseRepository.updateCourse(id, courseData);
    }

    async deleteById(id: number | undefined): Promise<course | null> {
        if (!id) {
          throw new Error("Curso não encontrado");
        }
    
        return await this.courseRepository.deleteById(id);
    }
}