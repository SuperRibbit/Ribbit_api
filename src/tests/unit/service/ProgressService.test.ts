import { describe, it, expect, jest, beforeEach } from "@jest/globals";
import type { Mock } from "jest-mock";
import { AppError } from "../../../utils/AppError.js";

const repoMocks = {
  findClassById: jest.fn() as Mock<(...args: any[]) => any>,
  checkProgressExists: jest.fn() as Mock<(...args: any[]) => any>,
  createProgress: jest.fn() as Mock<(...args: any[]) => any>,
  countTotalClassesInCourse: jest.fn() as Mock<(...args: any[]) => any>,
  countCompletedClassesByStudent: jest.fn() as Mock<(...args: any[]) => any>,
  updateEnrollmentProgress: jest.fn() as Mock<(...args: any[]) => any>,
  deleteProgress: jest.fn() as Mock<(...args: any[]) => any>,
};

// Mockando o ProgressRepository antes de importar o service
await jest.unstable_mockModule("../../../repository/ProgressRepository.js", () => ({
  ProgressRepository: {
    getInstance: () => ({
      findClassById: repoMocks.findClassById,
      checkProgressExists: repoMocks.checkProgressExists,
      createProgress: repoMocks.createProgress,
      countTotalClassesInCourse: repoMocks.countTotalClassesInCourse,
      countCompletedClassesByStudent: repoMocks.countCompletedClassesByStudent,
      updateEnrollmentProgress: repoMocks.updateEnrollmentProgress,
      deleteProgress: repoMocks.deleteProgress,
    }),
  },
}));

const { ProgressService } = await import("../../../service/ProgressService.js");

describe("ProgressService", () => {
  let service: any;
  const studentId = "student-uuid";
  const classId = 101;
  const courseId = 1;

  beforeEach(() => {
    jest.resetAllMocks();
    service = new ProgressService();
  });

  describe("markClassAsCompleted", () => {
    it("deve lançar erro se o class_id não for fornecido", async () => {
      await expect(service.markClassAsCompleted(studentId, 0))
        .rejects.toThrow(new AppError("Erro de validação: O campo 'class_id' é obrigatório.", 400));
    });

    it("deve lançar erro se a aula não for encontrada", async () => {
      repoMocks.findClassById.mockResolvedValue(null);

      await expect(service.markClassAsCompleted(studentId, classId))
        .rejects.toThrow(new AppError(`Nenhuma aula encontrada com o ID ${classId}.`, 404));
    });

    it("deve marcar aula como concluída e retornar o progresso (aula ainda não concluída)", async () => {
      repoMocks.findClassById.mockResolvedValue({ class_id: classId, Module: { fk_course: courseId } });
      repoMocks.checkProgressExists.mockResolvedValue(null);
      repoMocks.countTotalClassesInCourse.mockResolvedValue(10);
      repoMocks.countCompletedClassesByStudent.mockResolvedValue(5);

      const progress = await service.markClassAsCompleted(studentId, classId);

      expect(repoMocks.createProgress).toHaveBeenCalledWith(studentId, classId);
      expect(repoMocks.updateEnrollmentProgress).toHaveBeenCalledWith(studentId, courseId, 50);
      expect(progress).toBe(50);
    });

    it("não deve criar novo registro de progresso se a aula já estiver concluída", async () => {
      repoMocks.findClassById.mockResolvedValue({ class_id: classId, Module: { fk_course: courseId } });
      repoMocks.checkProgressExists.mockResolvedValue({ progress_id: 1 });
      repoMocks.countTotalClassesInCourse.mockResolvedValue(10);
      repoMocks.countCompletedClassesByStudent.mockResolvedValue(5);

      const progress = await service.markClassAsCompleted(studentId, classId);

      expect(repoMocks.createProgress).not.toHaveBeenCalled();
      expect(repoMocks.updateEnrollmentProgress).toHaveBeenCalledWith(studentId, courseId, 50);
      expect(progress).toBe(50);
    });

    it("deve retornar 0% se não houver aulas no curso", async () => {
      repoMocks.findClassById.mockResolvedValue({ class_id: classId, Module: { fk_course: courseId } });
      repoMocks.checkProgressExists.mockResolvedValue(null);
      repoMocks.countTotalClassesInCourse.mockResolvedValue(0);
      repoMocks.countCompletedClassesByStudent.mockResolvedValue(0);

      const progress = await service.markClassAsCompleted(studentId, classId);

      expect(progress).toBe(0);
      expect(repoMocks.updateEnrollmentProgress).toHaveBeenCalledWith(studentId, courseId, 0);
    });

    it("deve arredondar o progresso corretamente para cima (ex: 2/3 = 67%)", async () => {
      repoMocks.findClassById.mockResolvedValue({ class_id: classId, Module: { fk_course: courseId } });
      repoMocks.checkProgressExists.mockResolvedValue(null);
      repoMocks.countTotalClassesInCourse.mockResolvedValue(3);
      repoMocks.countCompletedClassesByStudent.mockResolvedValue(2);

      const progress = await service.markClassAsCompleted(studentId, classId);

      expect(progress).toBe(67);
    });

    it("deve arredondar o progresso corretamente para baixo (ex: 1/3 = 33%)", async () => {
      repoMocks.findClassById.mockResolvedValue({ class_id: classId, Module: { fk_course: courseId } });
      repoMocks.checkProgressExists.mockResolvedValue(null);
      repoMocks.countTotalClassesInCourse.mockResolvedValue(3);
      repoMocks.countCompletedClassesByStudent.mockResolvedValue(1);

      const progress = await service.markClassAsCompleted(studentId, classId);

      expect(progress).toBe(33);
    });

    it("deve retornar 100% quando todas as aulas forem concluídas", async () => {
      repoMocks.findClassById.mockResolvedValue({ class_id: classId, Module: { fk_course: courseId } });
      repoMocks.checkProgressExists.mockResolvedValue(null);
      repoMocks.countTotalClassesInCourse.mockResolvedValue(5);
      repoMocks.countCompletedClassesByStudent.mockResolvedValue(5);

      const progress = await service.markClassAsCompleted(studentId, classId);

      expect(progress).toBe(100);
    });

    it("deve propagar erro se o repositório falhar ao criar progresso", async () => {
      repoMocks.findClassById.mockResolvedValue({ class_id: classId, Module: { fk_course: courseId } });
      repoMocks.checkProgressExists.mockResolvedValue(null);
      repoMocks.createProgress.mockRejectedValue(new Error("Erro de banco de dados"));

      await expect(service.markClassAsCompleted(studentId, classId))
        .rejects.toThrow("Erro de banco de dados");
    });
  });

  describe("removeClassCompletion", () => {
    it("deve lançar erro se o registro de progresso não for encontrado", async () => {
      repoMocks.checkProgressExists.mockResolvedValue(null);

      await expect(service.removeClassCompletion(studentId, classId))
        .rejects.toThrow(new AppError("Registro de progresso não encontrado para esta aula.", 404));
    });

    it("deve lançar erro se a aula não for encontrada ao recalcular", async () => {
      repoMocks.checkProgressExists.mockResolvedValue({ progress_id: 1 });
      repoMocks.findClassById.mockResolvedValue(null);

      await expect(service.removeClassCompletion(studentId, classId))
        .rejects.toThrow(new AppError("Aula não encontrada.", 404));
    });

    it("deve remover a conclusão da aula e atualizar o progresso", async () => {
      repoMocks.checkProgressExists.mockResolvedValue({ progress_id: 1 });
      repoMocks.findClassById.mockResolvedValue({ class_id: classId, Module: { fk_course: courseId } });
      repoMocks.countTotalClassesInCourse.mockResolvedValue(10);
      repoMocks.countCompletedClassesByStudent.mockResolvedValue(4);

      const progress = await service.removeClassCompletion(studentId, classId);

      expect(repoMocks.deleteProgress).toHaveBeenCalledWith(1);
      expect(repoMocks.updateEnrollmentProgress).toHaveBeenCalledWith(studentId, courseId, 40);
      expect(progress).toBe(40);
    });

    it("deve retornar 0% se não houver aulas no curso após remoção", async () => {
        repoMocks.checkProgressExists.mockResolvedValue({ progress_id: 1 });
        repoMocks.findClassById.mockResolvedValue({ class_id: classId, Module: { fk_course: courseId } });
        repoMocks.countTotalClassesInCourse.mockResolvedValue(0);
        repoMocks.countCompletedClassesByStudent.mockResolvedValue(0);
  
        const progress = await service.removeClassCompletion(studentId, classId);
  
        expect(progress).toBe(0);
        expect(repoMocks.updateEnrollmentProgress).toHaveBeenCalledWith(studentId, courseId, 0);
      });
  });
});
