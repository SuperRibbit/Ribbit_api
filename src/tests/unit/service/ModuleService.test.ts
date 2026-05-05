import { describe, it, expect, jest, beforeEach } from "@jest/globals";
import type { Mock } from "jest-mock";

const repoMocks = {
  save: jest.fn() as Mock<(...args: any[]) => any>,
  findByCourseAndOrder: jest.fn() as Mock<(...args: any[]) => any>,
  findById: jest.fn() as Mock<(...args: any[]) => any>,
  deleteById: jest.fn() as Mock<(...args: any[]) => any>,
  updateById: jest.fn() as Mock<(...args: any[]) => any>,
};

const courseServiceMocks = {
  findById: jest.fn() as Mock<(...args: any[]) => any>,
};

// Mockando o ModuleRepository
await jest.unstable_mockModule("../../../repository/ModuleRepository.js", () => ({
  ModuleRepository: {
    getInstance: () => repoMocks,
  },
}));

// Mockando o CourseService
await jest.unstable_mockModule("../../../service/CourseService.js", () => ({
  CourseService: class {
    findById = courseServiceMocks.findById;
  },
}));

const { ModuleService } = await import("../../../service/ModuleService.js");

describe("ModuleService", () => {
  let service: any;

  beforeEach(() => {
    jest.resetAllMocks();
    service = new ModuleService();
  });

  describe("createModule", () => {
    const moduleData = {
      title: "Módulo 1",
      description: "Descrição",
      fk_course: 1,
      index_order: 1,
    };

    it("deve criar um módulo com sucesso", async () => {
      repoMocks.findByCourseAndOrder.mockResolvedValue(null);
      courseServiceMocks.findById.mockResolvedValue({ id_course: 1 });
      repoMocks.save.mockResolvedValue({ id_module: 10, ...moduleData });

      const result = await service.createModule(moduleData);

      expect(repoMocks.findByCourseAndOrder).toHaveBeenCalledWith(1, 1);
      expect(courseServiceMocks.findById).toHaveBeenCalledWith(1);
      expect(repoMocks.save).toHaveBeenCalled();
      expect(result.id_module).toBe(10);
    });

    it("deve lançar erro se já existir um módulo na mesma posição", async () => {
      repoMocks.findByCourseAndOrder.mockResolvedValue({ id_module: 9 });

      await expect(service.createModule(moduleData)).rejects.toThrow(
        /Já existe um módulo na posição/
      );
    });

    it("deve lançar erro se o curso não for encontrado", async () => {
      repoMocks.findByCourseAndOrder.mockResolvedValue(null);
      courseServiceMocks.findById.mockResolvedValue(null);

      await expect(service.createModule(moduleData)).rejects.toThrow(
        /Curso com ID 1 não encontrado/
      );
    });
  });

  describe("deleteModule", () => {
    it("deve deletar o módulo com sucesso", async () => {
      repoMocks.findById.mockResolvedValue({ id_module: 10 });
      repoMocks.deleteById.mockResolvedValue(undefined);

      await service.deleteModule(10);

      expect(repoMocks.findById).toHaveBeenCalledWith(10);
      expect(repoMocks.deleteById).toHaveBeenCalledWith(10);
    });

    it("deve lançar erro se o módulo não existir", async () => {
      repoMocks.findById.mockResolvedValue(null);

      await expect(service.deleteModule(99)).rejects.toThrow(
        /Módulo com ID 99 não encontrado/
      );
    });
  });

  describe("updateModule", () => {
    const updateData = {
      title: "Título Atualizado",
      description: "Nova Descrição",
      fk_course: 1,
      index_order: 2,
    };

    it("deve atualizar o módulo com sucesso", async () => {
      repoMocks.findById.mockResolvedValue({ id_module: 10 });
      courseServiceMocks.findById.mockResolvedValue({ id_course: 1 });
      repoMocks.findByCourseAndOrder.mockResolvedValue(null);
      repoMocks.updateById.mockResolvedValue({ id_module: 10, ...updateData });

      const result = await service.updateModule(10, updateData);

      expect(repoMocks.findById).toHaveBeenCalledWith(10);
      expect(courseServiceMocks.findById).toHaveBeenCalledWith(1);
      expect(repoMocks.findByCourseAndOrder).toHaveBeenCalledWith(1, 2);
      expect(repoMocks.updateById).toHaveBeenCalledWith(10, expect.any(Object));
      expect(result.title).toBe("Título Atualizado");
    });

    it("deve lançar erro se o módulo não existir na atualização", async () => {
      repoMocks.findById.mockResolvedValue(null);

      await expect(service.updateModule(99, updateData)).rejects.toThrow(
        /Módulo com ID 99 não encontrado/
      );
    });

    it("deve lançar erro se o curso não for encontrado na atualização", async () => {
      repoMocks.findById.mockResolvedValue({ id_module: 10 });
      courseServiceMocks.findById.mockRejectedValue(new Error("Curso não encontrado."));

      await expect(service.updateModule(10, updateData)).rejects.toThrow(
        "Curso não encontrado."
      );
    });

    it("deve permitir atualização se a posição for ocupada pelo próprio módulo", async () => {
      repoMocks.findById.mockResolvedValue({ id_module: 10 });
      courseServiceMocks.findById.mockResolvedValue({ id_course: 1 });
      repoMocks.findByCourseAndOrder.mockResolvedValue({ id_module: 10 }); // Mesmo ID
      repoMocks.updateById.mockResolvedValue({ id_module: 10, ...updateData });

      const result = await service.updateModule(10, updateData);

      expect(result.id_module).toBe(10);
      expect(repoMocks.updateById).toHaveBeenCalled();
    });

    it("deve permitir mover um módulo para outro curso se a posição estiver livre", async () => {
      const existingModule = { id_module: 10, fk_course: 1, index_order: 1 };
      const moveData = { ...updateData, fk_course: 2, index_order: 5 }; // Novo curso, nova posição

      repoMocks.findById.mockResolvedValue(existingModule);
      courseServiceMocks.findById.mockResolvedValue({ id_course: 2 });
      repoMocks.findByCourseAndOrder.mockResolvedValue(null); // Posição 5 livre no curso 2
      repoMocks.updateById.mockResolvedValue({ id_module: 10, ...moveData });

      const result = await service.updateModule(10, moveData);

      expect(courseServiceMocks.findById).toHaveBeenCalledWith(2);
      expect(repoMocks.findByCourseAndOrder).toHaveBeenCalledWith(2, 5);
      expect(result.fk_course).toBe(2);
    });

    it("deve propagar erro inesperado do repositório (ex: falha no banco)", async () => {
      repoMocks.findById.mockResolvedValue({ id_module: 10 });
      courseServiceMocks.findById.mockResolvedValue({ id_course: 1 });
      repoMocks.findByCourseAndOrder.mockResolvedValue(null);
      repoMocks.updateById.mockRejectedValue(new Error("Database connection lost"));

      await expect(service.updateModule(10, updateData)).rejects.toThrow(
        "Database connection lost"
      );
    });

    it("deve lidar com dados parciais no update mantendo os valores existentes", async () => {
      const partialData = { title: "Novo Título" };
      const existing = { id_module: 10, title: "Velho", description: "Desc", fk_course: 1, index_order: 1 };
      
      repoMocks.findById.mockResolvedValue(existing);
      courseServiceMocks.findById.mockResolvedValue({ id_course: 1 });
      repoMocks.findByCourseAndOrder.mockResolvedValue(null);
      repoMocks.updateById.mockImplementation((id, data) => Promise.resolve({ id_module: id, ...data }));

      const result = await service.updateModule(10, partialData);

      expect(result.title).toBe("Novo Título");
      expect(result.description).toBe("Desc"); // Mantido
      expect(result.fk_course).toBe(1); // Mantido
    });
  });
});
