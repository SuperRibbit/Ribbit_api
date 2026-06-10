import { EnrollmentRepository } from "../repository/EnrollmentRepository.js";
import { AppError } from "../utils/AppError.js";

export class EnrollmentService {
    private enrollmentRepository = EnrollmentRepository.getInstance();

    async enroll (studentId: string, courseId: number) {
        try {
            const enrollment = await this.enrollmentRepository.enroll(
                studentId, courseId,
            );

            return {
                "message": "Mátricula realizada com sucesso!",
                "enrollment_id": enrollment.id_enrollment,
            }
        } catch (error: any) {
            if (error.code === "P2003") {
              throw new AppError(`Curso com ID ${courseId} não encontrado.`, 404);
            }
            throw error;
        }
    }

    async findByUser(userId: string) {
        return await this.enrollmentRepository.findByUser(userId);
    }

    async findEnrollmentStatus(studentId: string, courseId: number) {
        return await this.enrollmentRepository.findEnrollmentStatus(
          studentId,
          courseId,
        );
    }

    async unenrollStudent(
        studentId: string,
        courseId: number,
      ): Promise<void> {
        try {
          await this.enrollmentRepository.unenrollStudent(
            studentId,
            courseId,
          );
        } catch (error: any) {
          if (error.code === "P2025") {
            throw new AppError("Você não possui matrícula ativa neste curso.", 404);
          }
          throw error;
        }
    }
}