import type { CreateCourseDTO } from "../dto/CourseDtos.js";
import type { Prisma } from "../generated/prisma/index.js";
import { prisma } from "../server.js";

export class CourseRepository {
  private static instance: CourseRepository;

  static getInstance(): CourseRepository {
    if (!this.instance) {
      this.instance = new CourseRepository();
    }
    return this.instance;
  }

  async findAll(search?: string) {
    const where: Prisma.CourseWhereInput = search
      ? { title: { contains: search, mode: "insensitive" } }
      : {};

    const courses = await prisma.course.findMany({
      where,
      select: {
        id_course: true,
        title: true,
        description: true,
        banner_url: true,
        slug: true,
        User: { select: { full_name: true, avatar_url: true } },
      },
    });

    return {
      total_courses: courses.length,
      courses: courses.map(({ User, ...rest }) => ({ ...rest, teacher: User })),
    };
  }

  async findById(courseId: number, studentId?: string) {
    return await prisma.course.findUnique({
      where: { id_course: courseId },
      select: {
        id_course: true,
        title: true,
        description: true,
        banner_url: true,
        slug: true,
        User: { select: { full_name: true } },
        Enrollment: studentId
          ? { where: { student_id: studentId }, select: { progress: true } }
          : false,
        Module: {
          orderBy: { index_order: "asc" },
          select: {
            id_module: true,
            title: true,
            index_order: true,
            Course_class: {
              orderBy: { index_order: "asc" },
              select: {
                class_id: true,
                title: true,
                Student_progress: studentId
                  ? {
                    where: { student_id: studentId },
                    select: { progress_id: true },
                  }
                  : false,
              },
            },
          },
        },
      },
    });
  }

  async findBySlug(slug: string) {
    return await prisma.course.findFirst({ where: { slug } });
  }

  async createCourse(data: CreateCourseDTO) {
    return await prisma.course.create({
      data: {
        ...data,
        description: data.description || "",
      }, select: { id_course: true }
    });
  }

  async updateCourse(courseId: number, data: Prisma.CourseUpdateInput) {
    return await prisma.course.update({
      where: { id_course: courseId },
      data,
      select: {
        id_course: true,
        title: true,
        description: true,
        banner_url: true,
        slug: true,
      },
    });
  }

  async deleteById(courseId: number): Promise<void> {
    await prisma.course.delete({ where: { id_course: courseId } });
  }
}
