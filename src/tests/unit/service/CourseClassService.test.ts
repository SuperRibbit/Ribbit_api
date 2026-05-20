import { describe, it, expect, jest, beforeEach } from "@jest/globals";
import type { Mock } from "jest-mock";
import { AppError } from "../../../utils/AppError.js";

const repoMocks = {
  findById: jest.fn() as Mock<(...args: any[]) => any>,
  findByModuleAndOrder: jest.fn() as Mock<(...args: any[]) => any>,
  createCourseClass: jest.fn() as Mock<(...args: any[]) => any>,
  updateCourseClass: jest.fn() as Mock<(...args: any[]) => any>,
  deleteById: jest.fn() as Mock<(...args: any[]) => any>,
  findMaterialsById: jest.fn() as Mock<(...args: any[]) => any>,
};

// Mockando o CourseClassRepository antes de importar o service
await jest.unstable_mockModule("../../../repository/CourseClassRepository.js", () => ({
  CourseClassRepository: {
    getInstance: () => ({
      findById: repoMocks.findById,
      findByModuleAndOrder: repoMocks.findByModuleAndOrder,
      createCourseClass: repoMocks.createCourseClass,
      updateCourseClass: repoMocks.updateCourseClass,
      deleteById: repoMocks.deleteById,
      findMaterialsById: repoMocks.findMaterialsById,
    }),
  },
}));

const { CourseClassService } = await import("../../../service/CourseClassService.js");

describe("CourseClassService", () => {
  let service: any;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new CourseClassService();
  });

  describe("findById", () => {
    it("deve retornar uma aula com materiais com sucesso", async () => {
      const mockClass = {
        class_id: 1,
        title: "Aula 1",
        description: "Descrição 1",
        index_order: 1,
        fk_module: 10,
      };
      const mockMaterials = [
        { file_id: 1, display_name: "Material 1", file_url: "url", file_type: "pdf" }
      ];

      repoMocks.findById.mockResolvedValue(mockClass);
      repoMocks.findMaterialsById.mockResolvedValue(mockMaterials);

      const result = await service.findById(1);

      expect(repoMocks.findById).toHaveBeenCalledWith(1);
      expect(repoMocks.findMaterialsById).toHaveBeenCalledWith(1);
      expect(result).toEqual({
        ...mockClass,
        materials: mockMaterials
      });
    });

    it("deve lançar erro se o id não for fornecido", async () => {
      await expect(service.findById(undefined)).rejects.toMatchObject({
        message: "Insira um id de aula válido",
        statusCode: 404
      });
    });

    it("deve lançar erro se a aula não for encontrada", async () => {
      repoMocks.findById.mockResolvedValue(null);
      await expect(service.findById(999)).rejects.toMatchObject({
        message: "Nenhuma aula encontrada com o ID 999",
        statusCode: 400
      });
    });
  });

  describe("createCourseClass", () => {
    it("deve criar uma aula com sucesso", async () => {
      const classData = {
        title: "Nova Aula",
        description: "Desc",
        index_order: 2,
        fk_module: 10
      };
      repoMocks.findByModuleAndOrder.mockResolvedValue(null);
      repoMocks.createCourseClass.mockResolvedValue({ class_id: 1, ...classData });

      const result = await service.createCourseClass(classData);

      expect(repoMocks.findByModuleAndOrder).toHaveBeenCalledWith(10, 2);
      expect(repoMocks.createCourseClass).toHaveBeenCalled();
      expect(result.class_id).toBe(1);
    });

    it("deve lançar erro se já existir uma aula na mesma posição e módulo", async () => {
      const classData = { index_order: 1, fk_module: 10 };
      repoMocks.findByModuleAndOrder.mockResolvedValue({ class_id: 5 });

      await expect(service.createCourseClass(classData)).rejects.toMatchObject({
        message: "Já existe uma aula na posição 1 deste módulo. Escolha outra ordem ou reordene as aulas existentes.",
        statusCode: 400
      });
    });
  });

  describe("updateCourseClass", () => {
    it("deve atualizar uma aula com sucesso", async () => {
      const updateData = { title: "Título Atualizado" };
      repoMocks.findById.mockResolvedValue({ class_id: 1 });
      repoMocks.updateCourseClass.mockResolvedValue({ class_id: 1, ...updateData });

      const result = await service.updateCourseClass(1, updateData);

      expect(repoMocks.findById).toHaveBeenCalledWith(1);
      expect(repoMocks.updateCourseClass).toHaveBeenCalledWith(1, updateData);
      expect(result.title).toBe("Título Atualizado");
    });

    it("deve lançar erro se o id não for fornecido na atualização", async () => {
      await expect(service.updateCourseClass(undefined, {})).rejects.toMatchObject({
        message: "Aula não encontrada",
        statusCode: 400
      });
    });

    it("deve lançar erro se a aula não existir na atualização", async () => {
      repoMocks.findById.mockResolvedValue(null);
      await expect(service.updateCourseClass(999, {})).rejects.toMatchObject({
        message: "Aula não encontrada",
        statusCode: 400
      });
    });
  });

  describe("deleteCourseClass", () => {
    it("deve deletar uma aula com sucesso", async () => {
      repoMocks.findById.mockResolvedValue({ class_id: 1 });
      repoMocks.deleteById.mockResolvedValue({ class_id: 1 });

      const result = await service.deleteCourseClass(1);

      expect(repoMocks.findById).toHaveBeenCalledWith(1);
      expect(repoMocks.deleteById).toHaveBeenCalledWith(1);
      expect(result.class_id).toBe(1);
    });

    it("deve lançar erro se o id não for fornecido na deleção", async () => {
      await expect(service.deleteCourseClass(undefined)).rejects.toMatchObject({
        message: "Aula não encontrada",
        statusCode: 400
      });
    });

    it("deve lançar erro se a aula não existir na deleção", async () => {
      repoMocks.findById.mockResolvedValue(null);
      await expect(service.deleteCourseClass(999)).rejects.toMatchObject({
        message: "Aula não encontrada",
        statusCode: 400
      });
    });
  });
});
