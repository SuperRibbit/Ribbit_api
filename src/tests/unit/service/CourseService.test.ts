import { describe, it, expect, jest, beforeEach } from "@jest/globals";
import type { Mock } from "jest-mock";

const repoMocks = {
  findAll: jest.fn() as Mock<(...args: any[]) => any>,
  findByUser: jest.fn() as Mock<(...args: any[]) => any>,
  findById: jest.fn() as Mock<(...args: any[]) => any>,
  createCourse: jest.fn() as Mock<(...args: any[]) => any>,
  updateCourse: jest.fn() as Mock<(...args: any[]) => any>,
  deleteById: jest.fn() as Mock<(...args: any[]) => any>,
};

// Mockando o CourseRepository antes de importar o service
await jest.unstable_mockModule("../../../repository/CourseRepository.js", () => ({
  CourseRepository: {
    getInstance: () => ({
      findAll: repoMocks.findAll,
      findByUser: repoMocks.findByUser,
      findById: repoMocks.findById,
      createCourse: repoMocks.createCourse,
      updateCourse: repoMocks.updateCourse,
      deleteById: repoMocks.deleteById,
    }),
  },
}));

const { CourseService } = await import("../../../service/CourseService.js");

describe("CourseService", () => {
  let service: any;

  beforeEach(() => {
    jest.resetAllMocks();
    service = new CourseService();
  });

  describe("findAll", () => {
    it("deve retornar todos os cursos quando nenhum termo de busca é fornecido", async () => {
      const mockCourses = [{ id_course: 1, title: "Curso A" }];
      repoMocks.findAll.mockResolvedValue(mockCourses);

      const result = await service.findAll();

      expect(repoMocks.findAll).toHaveBeenCalledWith(undefined);
      expect(result).toEqual(mockCourses);
    });

    it("deve passar o termo de busca para o repositório", async () => {
      await service.findAll("typescript");
      expect(repoMocks.findAll).toHaveBeenCalledWith("typescript");
    });

    it("deve propagar erro se o repositório falhar", async () => {
      repoMocks.findAll.mockRejectedValue(new Error("Database error"));
      await expect(service.findAll()).rejects.toThrow("Database error");
    });
  });

  describe("findByUser", () => {
    it("deve retornar os cursos do usuário", async () => {
      const userId = "550e8400-e29b-41d4-a716-446655440000";
      const mockCourses = {
        total_courses: 1,
        courses: [{ id_course: 1, title: "Curso A" }],
      };
      repoMocks.findByUser.mockResolvedValue(mockCourses);

      const result = await service.findByUser(userId);

      expect(repoMocks.findByUser).toHaveBeenCalledWith(userId);
      expect(result).toEqual(mockCourses);
    });

    it("deve propagar erro se o repositório falhar", async () => {
      repoMocks.findByUser.mockRejectedValue(new Error("Database error"));

      await expect(service.findByUser("user-id")).rejects.toThrow("Database error");
    });
  });

  describe("findById", () => {
    it("deve retornar o curso formatado com módulos e progresso", async () => {
      const mockCourseFromRepo = {
        id_course: 1,
        title: "Curso Teste",
        User: { full_name: "Professor Teste" },
        Enrollment: [],
        Module: [
          {
            id_module: 10,
            title: "Módulo 1",
            index_order: 1,
            Course_class: [
              {
                class_id: 100,
                title: "Aula 1",
                Student_progress: [{ id: 1 }] // Aula concluída
              },
              {
                class_id: 101,
                title: "Aula 2",
                Student_progress: [] // Aula não concluída
              }
            ]
          }
        ]
      };

      repoMocks.findById.mockResolvedValue(mockCourseFromRepo);

      const result = await service.findById(1, "student-uuid");

      expect(repoMocks.findById).toHaveBeenCalledWith(1, "student-uuid");
      expect(result.teacher_name).toBe("Professor Teste");
      expect(result.progress).toBe(50); // 1 de 2 aulas concluídas
      expect(result.modules[0].classes).toHaveLength(2);
      expect(result.modules[0].classes[0].is_completed).toBe(true);
      expect(result.modules[0].classes[1].is_completed).toBe(false);
    });

    it("deve calcular progresso corretamente com múltiplos módulos", async () => {
      const mockCourseFromRepo = {
        id_course: 1,
        title: "Curso Multi Módulos",
        User: { full_name: "Prof" },
        Module: [
          {
            id_module: 1,
            Course_class: [
              { class_id: 101, Student_progress: [{ id: 1 }] } // 1 concluída
            ]
          },
          {
            id_module: 2,
            Course_class: [
              { class_id: 201, Student_progress: [] },
              { class_id: 202, Student_progress: [{ id: 2 }] } // 1 concluída
            ]
          }
        ]
      };
      repoMocks.findById.mockResolvedValue(mockCourseFromRepo);

      const result = await service.findById(1, "uid");
      // Total: 3 aulas, Concluídas: 2. Progresso: 2/3 = 66.66% -> 67% (Math.round)
      expect(result.progress).toBe(67);
    });

    it("deve retornar progresso 0 quando não há aulas nos módulos", async () => {
      const mockCourseFromRepo = {
        id_course: 1,
        title: "Curso Sem Aulas",
        User: { full_name: "Prof" },
        Module: [
          { id_module: 1, Course_class: [] }
        ]
      };
      repoMocks.findById.mockResolvedValue(mockCourseFromRepo);

      const result = await service.findById(1, "uid");
      expect(result.progress).toBe(0);
    });

    it("deve retornar progresso 0 quando não há módulos", async () => {
      const mockCourseFromRepo = {
        id_course: 1,
        title: "Curso Sem Módulos",
        User: { full_name: "Prof" },
        Module: []
      };
      repoMocks.findById.mockResolvedValue(mockCourseFromRepo);

      const result = await service.findById(1, "uid");
      expect(result.progress).toBe(0);
    });

    it("deve lançar erro se o curso não for encontrado", async () => {
      repoMocks.findById.mockResolvedValue(null);
      await expect(service.findById(999)).rejects.toThrow("Curso não encontrado.");
    });
  });

  describe("createCourse", () => {
    it("deve criar um curso com sucesso", async () => {
      const courseData = { title: "Novo", slug: "novo" };
      repoMocks.createCourse.mockResolvedValue({ id_course: 1 });

      const result = await service.createCourse(courseData, "teacher-uuid");

      expect(repoMocks.createCourse).toHaveBeenCalledWith({
        ...courseData,
        User: { connect: { user_uuid: "teacher-uuid" } }
      });
      expect(result.message).toContain("sucesso");
      expect(result.course_id).toBe(1);
    });

    it("deve lançar erro amigável se o slug já existir", async () => {
      const error = new Error("Prisma error") as any;
      error.code = "P2002";
      repoMocks.createCourse.mockRejectedValue(error);

      await expect(service.createCourse({ slug: "repetido" } as any, "uid"))
        .rejects.toThrow(/já está em uso/);
    });

    it("deve propagar outros erros na criação", async () => {
      repoMocks.createCourse.mockRejectedValue(new Error("General fail"));
      await expect(service.createCourse({} as any, "uid")).rejects.toThrow("General fail");
    });
  });

  describe("updateCourse", () => {
    it("deve atualizar o curso com sucesso", async () => {
      repoMocks.updateCourse.mockResolvedValue({ id_course: 1, title: "Novo" });
      
      const result = await service.updateCourse(1, { title: "Novo" });

      expect(repoMocks.updateCourse).toHaveBeenCalledWith(1, { title: "Novo" });
      expect(result.course.title).toBe("Novo");
    });

    it("deve lançar erro se o curso não existir na atualização (P2025)", async () => {
      const error = new Error() as any;
      error.code = "P2025";
      repoMocks.updateCourse.mockRejectedValue(error);

      await expect(service.updateCourse(999, {})).rejects.toThrow("Curso não encontrado.");
    });

    it("deve propagar outros erros na atualização", async () => {
      repoMocks.updateCourse.mockRejectedValue(new Error("Update failed"));
      await expect(service.updateCourse(1, {})).rejects.toThrow("Update failed");
    });
  });

  describe("deleteById", () => {
    it("deve deletar o curso com sucesso", async () => {
      repoMocks.deleteById.mockResolvedValue(undefined);
      await service.deleteById(1);
      expect(repoMocks.deleteById).toHaveBeenCalledWith(1);
    });

    it("deve lançar erro se o curso não existir na deleção (P2025)", async () => {
      const error = new Error() as any;
      error.code = "P2025";
      repoMocks.deleteById.mockRejectedValue(error);

      await expect(service.deleteById(999)).rejects.toThrow("Curso não encontrado.");
    });

    it("deve propagar outros erros na deleção", async () => {
      repoMocks.deleteById.mockRejectedValue(new Error("Delete failed"));
      await expect(service.deleteById(1)).rejects.toThrow("Delete failed");
    });
  });
});
