import { describe, it, expect, jest, beforeEach } from "@jest/globals";
import type { Mock } from "jest-mock";

// Mocks do repositório
const repoMocks = {
  findCourseClassById: jest.fn() as Mock<(...args: any[]) => any>,
  create: jest.fn() as Mock<(...args: any[]) => any>,
  findById: jest.fn() as Mock<(...args: any[]) => any>,
  deleteById: jest.fn() as Mock<(...args: any[]) => any>,
};

// Mockando o repositório antes de importar o service
await jest.unstable_mockModule("../../../repository/ClassFileRepository.js", () => ({
  ClassFileRepository: jest.fn().mockImplementation(() => ({
    findCourseClassById: repoMocks.findCourseClassById,
    create: repoMocks.create,
    findById: repoMocks.findById,
    deleteById: repoMocks.deleteById,
  })),
}));

// Importar o service
const { ClassFileService } = await import("../../../service/ClassFileService.js");

describe("ClassFileService", () => {
  let service: any;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new ClassFileService();
  });

  describe("checkClassExists", () => {
    it("deve retornar true quando a aula existe", async () => {
      repoMocks.findCourseClassById.mockResolvedValue({ class_id: 1 });
      const result = await service.checkClassExists(1);
      expect(result).toBe(true);
      expect(repoMocks.findCourseClassById).toHaveBeenCalledWith(1);
    });

    it("deve retornar false quando a aula não existe", async () => {
      repoMocks.findCourseClassById.mockResolvedValue(null);
      const result = await service.checkClassExists(999);
      expect(result).toBe(false);
    });
  });

  describe("saveFileRecord", () => {
    it("deve salvar um registro de arquivo do Google Drive com sucesso", async () => {
      const input = {
        display_name: "PDF de Aula",
        file_url: "https://drive.google.com/test",
        class_id: 1,
      };

      const mockCreated = { ...input, file_id: 10, storage_path: "google_drive", file_type: "application/pdf" };
      repoMocks.create.mockResolvedValue(mockCreated);

      const result = await service.saveFileRecord(input);

      expect(repoMocks.create).toHaveBeenCalledWith({
        display_name: input.display_name,
        storage_path: "google_drive",
        file_url: input.file_url,
        file_type: "application/pdf",
        class_id: input.class_id,
      });
      expect(result).toEqual(mockCreated);
    });
  });

  describe("saveLinkRecord", () => {
    const input = {
      display_name: "Vídeo YT",
      file_url: "https://www.youtube.com/watch?v=123",
      class_id: 1,
    };

    it("deve salvar um link externo de vídeo com sucesso (YouTube)", async () => {
      repoMocks.create.mockResolvedValue({ ...input, file_id: 11 });

      const result = await service.saveLinkRecord(input);

      expect(repoMocks.create).toHaveBeenCalledWith({
        display_name: input.display_name,
        storage_path: "external_link",
        file_url: input.file_url,
        file_type: "video_link",
        class_id: input.class_id,
      });
      expect(result.file_id).toBe(11);
    });

    it("deve salvar um link externo de vídeo com sucesso (Vimeo)", async () => {
      const vimeoInput = { ...input, file_url: "https://vimeo.com/12345" };
      repoMocks.create.mockResolvedValue({ ...vimeoInput, file_id: 12 });

      await service.saveLinkRecord(vimeoInput);
      expect(repoMocks.create).toHaveBeenCalledWith(expect.objectContaining({ file_url: vimeoInput.file_url }));
    });

    it("deve salvar um link direto para arquivo de vídeo (.mp4)", async () => {
      const mp4Input = { ...input, file_url: "https://site.com/video.mp4" };
      repoMocks.create.mockResolvedValue({ ...mp4Input, file_id: 13 });

      await service.saveLinkRecord(mp4Input);
      expect(repoMocks.create).toHaveBeenCalled();
    });

    it("deve lançar erro para URLs que não são de vídeo", async () => {
      const invalidInput = { ...input, file_url: "https://google.com" };
      await expect(service.saveLinkRecord(invalidInput)).rejects.toThrow(
        "O link fornecido não é uma URL de vídeo válida"
      );
      expect(repoMocks.create).not.toHaveBeenCalled();
    });

    it("deve lançar erro para URLs inválidas", async () => {
      const invalidInput = { ...input, file_url: "not-a-url" };
      await expect(service.saveLinkRecord(invalidInput)).rejects.toThrow(
        "O link fornecido não é uma URL de vídeo válida"
      );
    });

    it("deve recusar protocolos não suportados (ex: ftp)", async () => {
      const ftpInput = { ...input, file_url: "ftp://site.com/video.mp4" };
      await expect(service.saveLinkRecord(ftpInput)).rejects.toThrow(
        "O link fornecido não é uma URL de vídeo válida"
      );
    });

    it("deve propagar erro se o repositório falhar no salvamento do link", async () => {
      repoMocks.create.mockRejectedValue(new Error("Link save fail"));
      await expect(service.saveLinkRecord(input)).rejects.toThrow("Link save fail");
    });
  });

  describe("deleteFileRecord", () => {
    it("deve deletar o registro quando ele existe", async () => {
      repoMocks.findById.mockResolvedValue({ file_id: 10 });
      repoMocks.deleteById.mockResolvedValue(undefined);

      await service.deleteFileRecord(10);

      expect(repoMocks.findById).toHaveBeenCalledWith(10);
      expect(repoMocks.deleteById).toHaveBeenCalledWith(10);
    });

    it("deve lançar erro 404 quando o arquivo não existe", async () => {
      repoMocks.findById.mockResolvedValue(null);

      await expect(service.deleteFileRecord(999)).rejects.toThrow(
        "O arquivo solicitado não existe ou já foi excluído"
      );
      expect(repoMocks.deleteById).not.toHaveBeenCalled();
    });

    it("deve propagar erro se a deleção falhar", async () => {
      repoMocks.findById.mockResolvedValue({ file_id: 10 });
      repoMocks.deleteById.mockRejectedValue(new Error("Database error"));

      await expect(service.deleteFileRecord(10)).rejects.toThrow("Database error");
    });
  });
});
