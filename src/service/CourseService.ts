import type { Course, Prisma } from "../generated/prisma/index.js";
import { CourseRepository } from "../repository/CourseRepository.js";

export class CourseService {
  private courseRepository = CourseRepository.getInstance();

  async findAll(): Promise<Course[]> {
    return await this.courseRepository.findAll();
  }

  async findById(id: number | undefined): Promise<Course> {
    if (!id) {
      throw new Error("Curso não encontrado");
    }

    const course = await this.courseRepository.findById(id);

    if (!course) {
      throw new Error("Curso não encontrado");
    }
    return course;
  }

  async findByTitle(title: string | undefined): Promise<Course> {
    if (!title) {
      throw new Error("Curso não encontrado");
    }

    const course = await this.courseRepository.findByTitle(title);

    if (!course) {
      throw new Error("Curso não encontrado");
    }
    return course;
  }

  async createCourse(courseData: any): Promise<Course | null> {
    const { title, description, banner_url, slug, fk_teacher } = courseData;

    const existingCourse = await this.courseRepository.findByTitle(title);
    if (existingCourse) {
      throw new Error("Curso já cadastrado");
    }

    const courseCreateInput: Prisma.CourseCreateInput = {
      title,
      description,
      banner_url,
      slug,
      User: {
        connect: {
          user_uuid: fk_teacher,
        },
      },
    };

    return await this.courseRepository.createCourse(courseCreateInput);
  }

  async updateCourse(
    id: number | undefined,
    courseData: Prisma.CourseUpdateInput
  ): Promise<Course | null> {
    if (!id) {
      throw new Error("Curso não encontrado");
    }

    return await this.courseRepository.updateCourse(id, courseData);
  }

  async deleteById(id: number | undefined): Promise<Course | null> {
    if (!id) {
      throw new Error("Curso não encontrado");
    }

    return await this.courseRepository.deleteById(id);
  }
}
