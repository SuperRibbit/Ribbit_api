import { ProgressRepository } from "../repository/ProgressRepository.js";
import { AppError } from "../utils/AppError.js";

export class ProgressService {
  private repository = new ProgressRepository();

  async markClassAsCompleted(studentId: string, classId: number): Promise<number> {
    
    if (!classId) {
      throw new AppError("Erro de validação: O campo 'class_id' é obrigatório.", 400);
    }

    const courseClass = await this.repository.findClassById(classId);
    if (!courseClass) {
      throw new AppError(`Nenhuma aula encontrada com o ID ${classId}.`, 404);
    }

    const courseId = courseClass.Module.fk_course; 

    const alreadyCompleted = await this.repository.checkProgressExists(studentId, classId);
    if (!alreadyCompleted) {
      await this.repository.createProgress(studentId, classId);
    }

    const totalClasses = await this.repository.countTotalClassesInCourse(courseId);
    const completedClasses = await this.repository.countCompletedClassesByStudent(studentId, courseId);

    let progressPercentage = 0;
    if (totalClasses > 0) {
      progressPercentage = Math.round((completedClasses / totalClasses) * 100); 
    }

    await this.repository.updateEnrollmentProgress(studentId, courseId, progressPercentage);

    return progressPercentage;
  }
}