import { describe, it, expect, jest, beforeEach } from "@jest/globals";
import type { User } from "../../../src/generated/prisma/index.js";

const repoMocks = {
  findAll: jest.fn(),
  findById: jest.fn(),
  findByEmail: jest.fn(),
  createUser: jest.fn(),
  updateUser: jest.fn(),
  deleteById: jest.fn(),
};

const bcryptMocks = {
  genSalt: jest.fn(),
  hash: jest.fn(),
};

await jest.unstable_mockModule("../../../src/repository/UserRepository.js", () => ({
  UserRepository: {
    getInstance: () => repoMocks,
  },
}));

await jest.unstable_mockModule("bcryptjs", () => ({
  __esModule: true,
  default: {
    genSalt: bcryptMocks.genSalt,
    hash: bcryptMocks.hash,
  },
}));

const { UserService } = await import("../../../src/service/UserService.js");

describe("UserService", () => {
  let userService: any;

  beforeEach(() => {
    jest.clearAllMocks();
    userService = new UserService();
  });

  describe("findAll", () => {
    it("deve retornar uma lista de usuários", async () => {
      const mockUsers: User[] = [
        { user_uuid: "1", email: "u1@test.com", full_name: "U1", role: "aluno", avatar_url: null, password_hash: "h1", created_at: new Date() },
      ];
      repoMocks.findAll.mockResolvedValue(mockUsers);
      const result = await userService.findAll();
      expect(result).toEqual(mockUsers);
    });

    it("deve propagar erro se o repositório falhar", async () => {
      repoMocks.findAll.mockRejectedValue(new Error("Database error"));
      await expect(userService.findAll()).rejects.toThrow("Database error");
    });
  });

  describe("findById", () => {
    it("deve retornar um usuário quando o id é válido", async () => {
      const mockUser = { user_uuid: "1", email: "u1@test.com" };
      repoMocks.findById.mockResolvedValue(mockUser);
      const result = await userService.findById("1");
      expect(result).toEqual(mockUser);
    });

    it("deve lançar erro quando o id não é fornecido", async () => {
      await expect(userService.findById(undefined)).rejects.toThrow("Usuário não encontrado");
    });

    it("deve lançar erro quando o usuário não é encontrado", async () => {
      repoMocks.findById.mockResolvedValue(null);
      await expect(userService.findById("non-existent")).rejects.toThrow("Usuário não encontrado");
    });
  });

  describe("createUser", () => {
    const userData = { email: "n@t.com", password: "p1", full_name: "N", role: "aluno" };

    it("deve criar um usuário com sucesso", async () => {
      repoMocks.findByEmail.mockResolvedValue(null);
      bcryptMocks.genSalt.mockResolvedValue("s");
      bcryptMocks.hash.mockResolvedValue("hp");
      repoMocks.createUser.mockResolvedValue({ ...userData, password_hash: "hp" });

      const result = await userService.createUser(userData);
      expect(bcryptMocks.hash).toHaveBeenCalledWith("p1", "s");
      expect(result.password_hash).toBe("hp");
    });

    it("deve lançar erro se o email já existe", async () => {
      repoMocks.findByEmail.mockResolvedValue({ email: "n@t.com" });
      await expect(userService.createUser(userData)).rejects.toThrow("Email já cadastrado");
    });

    it("deve propagar erro se o bcrypt falhar", async () => {
      repoMocks.findByEmail.mockResolvedValue(null);
      bcryptMocks.genSalt.mockRejectedValue(new Error("Bcrypt fail"));
      await expect(userService.createUser(userData)).rejects.toThrow("Bcrypt fail");
    });

    it("deve retornar null se o repositório retornar null", async () => {
      repoMocks.findByEmail.mockResolvedValue(null);
      bcryptMocks.genSalt.mockResolvedValue("s");
      bcryptMocks.hash.mockResolvedValue("hp");
      repoMocks.createUser.mockResolvedValue(null);
      const result = await userService.createUser(userData);
      expect(result).toBeNull();
    });
  });

  describe("updateUser", () => {
    it("deve fazer hash da senha se fornecida como string", async () => {
      bcryptMocks.genSalt.mockResolvedValue("s");
      bcryptMocks.hash.mockResolvedValue("hp");
      repoMocks.updateUser.mockResolvedValue({ user_uuid: "1" });

      await userService.updateUser("1", { password_hash: "new" });
      expect(bcryptMocks.hash).toHaveBeenCalledWith("new", "s");
    });

    it("não deve fazer hash se password_hash não for uma string (ex: objeto do Prisma)", async () => {
      repoMocks.updateUser.mockResolvedValue({ user_uuid: "1" });
      // Simula uma operação do Prisma como { set: '...' }
      await userService.updateUser("1", { password_hash: { set: "something" } as any });
      expect(bcryptMocks.hash).not.toHaveBeenCalled();
    });

    it("deve atualizar outros campos sem mexer no bcrypt", async () => {
      repoMocks.updateUser.mockResolvedValue({ user_uuid: "1", full_name: "X" });
      const result = await userService.updateUser("1", { full_name: "X" });
      expect(bcryptMocks.hash).not.toHaveBeenCalled();
      expect(result.full_name).toBe("X");
    });

    it("deve propagar erro se o repositório falhar", async () => {
      repoMocks.updateUser.mockRejectedValue(new Error("Update failed"));
      await expect(userService.updateUser("1", { full_name: "X" })).rejects.toThrow("Update failed");
    });

    it("deve lançar erro se o id for indefinido", async () => {
      await expect(userService.updateUser(undefined, {})).rejects.toThrow("Usuário não encontrado");
    });
  });

  describe("deleteById", () => {
    it("deve deletar com sucesso", async () => {
      repoMocks.deleteById.mockResolvedValue({ user_uuid: "1" });
      const result = await userService.deleteById("1");
      expect(result.user_uuid).toBe("1");
    });

    it("deve propagar erro se o repositório falhar", async () => {
      repoMocks.deleteById.mockRejectedValue(new Error("Delete failed"));
      await expect(userService.deleteById("1")).rejects.toThrow("Delete failed");
    });

    it("deve lançar erro se o id for indefinido", async () => {
      await expect(userService.deleteById(undefined)).rejects.toThrow("Usuário não encontrado");
    });
  });
});
