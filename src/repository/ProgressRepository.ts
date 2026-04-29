import { prisma } from "../server.js";

export class ProgressRepository {
  async findClassById(class_id: number) {
    return await prisma.course_class.findUnique({
      where: { class_id },
      select: { 
        class_id: true, 
        Module: {
          select: {
            fk_course: true
          }
        } 
      } 
    });
  }

  async checkProgressExists(student_id: string, class_id: number) {
    return await prisma.student_progress.findFirst({
      where: { student_id, class_id }
    });
  }

  async createProgress(student_id: string, class_id: number) {
    return await prisma.student_progress.create({
      data: {
        student_id,
        class_id,
        completed_at: new Date()
      }
    });
  }

  async countTotalClassesInCourse(course_id: number) {
    return await prisma.course_class.count({
      where: { 
        Module: {
          fk_course: course_id
        }
      }
    });
  }

  async countCompletedClassesByStudent(student_id: string, course_id: number) {
    return await prisma.student_progress.count({
      where: {
        student_id,
        Course_class: {
          Module: {
            fk_course: course_id
          }
        }
      }
    });
  }

  async updateEnrollmentProgress(student_id: string, course_id: number, new_progress: number) {
    const enrollment = await prisma.enrollment.findFirst({
      where: { student_id, course_id }
    });

    if (enrollment) {
      await prisma.enrollment.update({
        where: { id_enrollment: enrollment.id_enrollment },
        data: { progress: new_progress }
      });
    }
  }
}