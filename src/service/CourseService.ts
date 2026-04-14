import type { Course, Prisma } from "../generated/prisma/index.js";
import { CourseRepository } from "../repository/CourseRepository.js";

export class CourseService {
  private courseRepository = CourseRepository.getInstance();

  async findAll(search?: string) {
    return await this.courseRepository.findAll(search);
  }

  async findById(courseId: number, studentId: string) {
    const course = await this.courseRepository.findById(courseId, studentId);

    if (!course) {
      throw new Error("Curso não encontrado");
    }

    return course;
  }

  async createCourse(courseData: Prisma.CourseCreateInput, teacherUuid: string) {
    try {
      const course = await this.courseRepository.createCourse({
        ...courseData,
        User: { connect: { user_uuid: teacherUuid } },
      });

      return {
        message: "Curso criado com sucesso! Agora você pode adicionar módulos.",
        course_id: course.id_course,
      };
    } catch (error: any) {
      if (error.code === "P2002") {
        throw new Error(
          `O link (slug) '${courseData.slug}' já está em uso por outro curso. Escolha outro.`,
        );
      }
      throw error;
    }
  }

  async updateCourse(courseId: number, courseData: Prisma.CourseUpdateInput) {
    try {
      const updated = await this.courseRepository.updateCourse(
        courseId,
        courseData,
      );
      return {
        message: "Informações do curso atualizadas com sucesso!",
        course: updated,
      };
    } catch (error: any) {
      if (error.code === "P2025") {
        throw new Error("Curso não encontrado.");
      }
      throw error;
    }
  }

  async deleteById(courseId: number): Promise<void> {
    try {
      await this.courseRepository.deleteById(courseId);
    } catch (error: any) {
      if (error.code === "P2025") {
        throw new Error("Curso não encontrado.");
      }
      throw error;
    }
  }
}
