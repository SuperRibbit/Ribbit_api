import { EnrollmentRepository } from "../repository/EnrollmentRepository.js";

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
              throw new Error(`Curso com ID ${courseId} não encontrado.`);
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
            throw new Error("Você não possui matrícula ativa neste curso.");
          }
          throw error;
        }
    }
}