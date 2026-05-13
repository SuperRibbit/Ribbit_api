import { describe, it, expect, jest, beforeEach } from "@jest/globals";
import { AppError } from "../../../utils/AppError.js";

const repoMocks = {
  enroll: jest.fn<any>(),
  findByUser: jest.fn<any>(),
  findEnrollmentStatus: jest.fn<any>(),
  unenrollStudent: jest.fn<any>(),
};

await jest.unstable_mockModule("../../../repository/EnrollmentRepository.js", () => ({
  EnrollmentRepository: {
    getInstance: () => repoMocks,
  },
}));

const { EnrollmentService } = await import("../../../service/EnrollmentService.js");

const VALID_USER_ID = "550e8400-e29b-41d4-a716-446655440000";
const VALID_COURSE_ID = 1;

describe("EnrollmentService", () => {
  let enrollmentService: any;

  beforeEach(() => {
    jest.resetAllMocks();
    enrollmentService = new EnrollmentService();
  });

  describe("enroll", () => {
    it("deve realizar matrícula com sucesso", async () => {
      repoMocks.enroll.mockResolvedValue({ id_enrollment: 10 });

      const result = await enrollmentService.enroll(VALID_USER_ID, VALID_COURSE_ID);

      expect(repoMocks.enroll).toHaveBeenCalledWith(VALID_USER_ID, VALID_COURSE_ID);
      expect(result).toEqual({
        message: "Mátricula realizada com sucesso!",
        enrollment_id: 10,
      });
    });

    it("deve lançar AppError se o curso não for encontrado (P2003)", async () => {
      const prismaError = new Error("Foreign key constraint failed");
      (prismaError as any).code = "P2003";
      repoMocks.enroll.mockRejectedValue(prismaError);

      await expect(enrollmentService.enroll(VALID_USER_ID, VALID_COURSE_ID))
        .rejects.toThrow(new AppError(`Curso com ID ${VALID_COURSE_ID} não encontrado.`));
    });

    it("deve propagar erro P2002 (já matriculado) como erro genérico do Prisma", async () => {
      const prismaError = new Error("Unique constraint failed");
      (prismaError as any).code = "P2002";
      repoMocks.enroll.mockRejectedValue(prismaError);

      await expect(enrollmentService.enroll(VALID_USER_ID, VALID_COURSE_ID))
        .rejects.toThrow("Unique constraint failed");
    });

    it("deve propagar outros erros", async () => {
      repoMocks.enroll.mockRejectedValue(new Error("Database connection fail"));

      await expect(enrollmentService.enroll(VALID_USER_ID, VALID_COURSE_ID))
        .rejects.toThrow("Database connection fail");
    });
  });

  describe("findByUser", () => {
    it("deve retornar matrículas do usuário", async () => {
      const mockResult = {
        total_enrollments: 1,
        courses: [{ enrollment_id: 1, progress: 0, course: { course_id: 1, title: "Course 1" } }],
      };
      repoMocks.findByUser.mockResolvedValue(mockResult);

      const result = await enrollmentService.findByUser(VALID_USER_ID);

      expect(repoMocks.findByUser).toHaveBeenCalledWith(VALID_USER_ID);
      expect(result).toEqual(mockResult);
    });

    it("deve retornar lista vazia quando o usuário não tem matrículas", async () => {
      const mockResult = {
        total_enrollments: 0,
        courses: [],
      };
      repoMocks.findByUser.mockResolvedValue(mockResult);

      const result = await enrollmentService.findByUser(VALID_USER_ID);

      expect(result).toEqual(mockResult);
    });

    it("deve propagar erros do repositório", async () => {
      repoMocks.findByUser.mockRejectedValue(new Error("Repo fail"));
      await expect(enrollmentService.findByUser(VALID_USER_ID)).rejects.toThrow("Repo fail");
    });
  });

  describe("findEnrollmentStatus", () => {
    it("deve retornar status de matrícula quando o usuário está matriculado", async () => {
      const mockStatus = { is_enrolled: true, progress: 50, enrollment_date: new Date() };
      repoMocks.findEnrollmentStatus.mockResolvedValue(mockStatus);

      const result = await enrollmentService.findEnrollmentStatus(VALID_USER_ID, VALID_COURSE_ID);

      expect(repoMocks.findEnrollmentStatus).toHaveBeenCalledWith(VALID_USER_ID, VALID_COURSE_ID);
      expect(result).toEqual(mockStatus);
    });

    it("deve retornar status de matrícula quando o usuário NÃO está matriculado", async () => {
      const mockStatus = { is_enrolled: false, progress: 0, enrollment_date: null };
      repoMocks.findEnrollmentStatus.mockResolvedValue(mockStatus);

      const result = await enrollmentService.findEnrollmentStatus(VALID_USER_ID, VALID_COURSE_ID);

      expect(result).toEqual(mockStatus);
    });

    it("deve propagar erros do repositório", async () => {
      repoMocks.findEnrollmentStatus.mockRejectedValue(new Error("Repo fail"));
      await expect(enrollmentService.findEnrollmentStatus(VALID_USER_ID, VALID_COURSE_ID)).rejects.toThrow("Repo fail");
    });
  });

  describe("unenrollStudent", () => {
    it("deve cancelar matrícula com sucesso", async () => {
      repoMocks.unenrollStudent.mockResolvedValue(undefined);

      await enrollmentService.unenrollStudent(VALID_USER_ID, VALID_COURSE_ID);

      expect(repoMocks.unenrollStudent).toHaveBeenCalledWith(VALID_USER_ID, VALID_COURSE_ID);
    });

    it("deve lançar AppError se a matrícula não existir (P2025)", async () => {
      const prismaError = new Error("Record to delete does not exist");
      (prismaError as any).code = "P2025";
      repoMocks.unenrollStudent.mockRejectedValue(prismaError);

      await expect(enrollmentService.unenrollStudent(VALID_USER_ID, VALID_COURSE_ID))
        .rejects.toThrow(new AppError("Você não possui matrícula ativa neste curso."));
    });

    it("deve propagar outros erros", async () => {
      repoMocks.unenrollStudent.mockRejectedValue(new Error("Delete fail"));

      await expect(enrollmentService.unenrollStudent(VALID_USER_ID, VALID_COURSE_ID))
        .rejects.toThrow("Delete fail");
    });
  });
});
