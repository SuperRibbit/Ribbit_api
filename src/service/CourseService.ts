import type { Course } from "../generated/prisma/index.js";
import { CourseRepository } from "../repository/CourseRepository.js";
import { AppError } from "../utils/AppError.js";
import { GoogleDriveService } from "./GoogleDriveService.js";
export class CourseService {
  private courseRepository = CourseRepository.getInstance();
  private googleDriveService = new GoogleDriveService();

  async findAll(search?: string) {
    return await this.courseRepository.findAll(search);
  }

  async findByUser(userId: string) {
    return await this.courseRepository.findByUser(userId);
  }

  async findById(courseId: number, studentId?: string) {
  const course = await this.courseRepository.findById(courseId, studentId);

  if (!course) {
    throw new AppError("Curso não encontrado.", 404);
  }

  const { User, Enrollment, Module, ...rest } = course;

  let totalClasses = 0;
  let completedClasses = 0;

  const modules = Module.map((mod) => ({
    module_id: mod.id_module,
    title: mod.title,
    index_order: mod.index_order,
    classes: mod.Course_class.map((cls) => {
      totalClasses++;
      const is_completed = Array.isArray(cls.Student_progress)
        ? cls.Student_progress.length > 0
        : false;
      if (is_completed) completedClasses++;
      return {
        class_id: cls.class_id,
        title: cls.title,
        is_completed,
      };
    }),
  }));

  const progress = totalClasses > 0 ? Math.round((completedClasses / totalClasses) * 100) : 0;

  return {
    ...rest,
    teacher_name: User.full_name,
    progress,
    modules,
  };
}

  async createCourse(
    courseData: { title: string; slug: string; description?: string },
    teacherUuid: string,
    bannerFile?: Express.Multer.File
  ) {
    try {
      const banner_url = bannerFile
        ? await this.googleDriveService.uploadMulterFile(bannerFile, "banner")
        : undefined;

      const course = await this.courseRepository.createCourse({
        ...courseData,
        banner_url,
        User: { connect: { user_uuid: teacherUuid } },
      });

      return {
        message: "Curso criado com sucesso! Agora você pode adicionar módulos.",
        course_id: course.id_course,
      };
    } catch (error: any) {
      if (error.code === "P2002") {
        throw new AppError(
          `O link (slug) '${courseData.slug}' já está em uso por outro curso. Escolha outro.`,
        );
      }
      throw error;
    }
  }

  async updateCourse(
    courseId: number,
    courseData: { title?: string; description?: string; slug?: string },
    bannerFile?: Express.Multer.File
  ) {
    try {
      const banner_url = bannerFile
        ? await this.googleDriveService.uploadMulterFile(bannerFile, "banner")
        : undefined;

      const updated = await this.courseRepository.updateCourse(courseId, {
        ...courseData,
        ...(banner_url !== undefined && { banner_url }),
      });
      return {
        message: "Informações do curso atualizadas com sucesso!",
        course: updated,
      };
    } catch (error: any) {
      if (error.code === "P2025") {
        throw new AppError("Curso não encontrado.", 404);
      }
      throw error;
    }
  }

  async deleteById(courseId: number): Promise<void> {
    try {
      await this.courseRepository.deleteById(courseId);
    } catch (error: any) {
      if (error.code === "P2025") {
        throw new AppError("Curso não encontrado.", 404);
      }
      throw error;
    }
  }
}
