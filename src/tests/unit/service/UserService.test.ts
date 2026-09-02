import { describe, it, expect, jest, beforeEach } from "@jest/globals";
import type { User } from "../../../generated/prisma/index.js";

const repoMocks = {
  findAll: jest.fn<() => Promise<User[]>>(),
  findById: jest.fn<(id: string) => Promise<User | null>>(),
  findByEmail: jest.fn<(email: string) => Promise<User | null>>(),
  createUser: jest.fn<(data: any) => Promise<User | null>>(),
  updateUser: jest.fn<(id: string, data: any) => Promise<User | null>>(),
  deleteById: jest.fn<(id: string) => Promise<User | null>>(),
};

const bcryptMocks = {
  genSalt: jest.fn<(rounds: number) => Promise<string>>(),
  hash: jest.fn<(s: string, salt: string) => Promise<string>>(),
};

await jest.unstable_mockModule("../../../repository/UserRepository.js", () => ({
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

const { UserService } = await import("../../../service/UserService.js");

const VALID_UUID = "550e8400-e29b-41d4-a716-446655440000";

describe("UserService", () => {
  let userService: any;

  beforeEach(() => {
    jest.resetAllMocks();
    userService = new UserService();
  });

  describe("findAll", () => {
    it("deve retornar uma lista de usuários", async () => {
      const mockUsers: User[] = [
        { user_uuid: VALID_UUID, email: "u1@test.com", full_name: "U1", role: "aluno", avatar_url: null, password_hash: "h1", created_at: new Date() },
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
      const mockUser = { user_uuid: VALID_UUID, email: "u1@test.com" } as User;
      repoMocks.findById.mockResolvedValue(mockUser);
      const result = await userService.findById(VALID_UUID);
      expect(result).toEqual(mockUser);
    });

    it("deve lançar erro quando o id não é fornecido", async () => {
      await expect(userService.findById(undefined)).rejects.toThrow("Usuário não encontrado");
    });

    it("deve lançar erro quando o id é inválido (não UUID)", async () => {
      await expect(userService.findById("invalid-id")).rejects.toThrow("Usuário não encontrado");
    });

    it("deve lançar erro quando o usuário não é encontrado", async () => {
      repoMocks.findById.mockResolvedValue(null);
      await expect(userService.findById(VALID_UUID)).rejects.toThrow("Usuário não encontrado");
    });
  });

  describe("createUser", () => {
    const userData = { email: "n@t.com", password: "p1", full_name: "N", role: "aluno" };

    it("deve criar um usuário com sucesso", async () => {
      repoMocks.findByEmail.mockResolvedValue(null);
      bcryptMocks.genSalt.mockResolvedValue("s");
      bcryptMocks.hash.mockResolvedValue("hp");

      const mockCreatedUser: User = {
        user_uuid: VALID_UUID,
        email: userData.email,
        full_name: userData.full_name,
        role: userData.role as any,
        password_hash: "hp",
        avatar_url: null,
        created_at: new Date()
      };

      repoMocks.createUser.mockResolvedValue(mockCreatedUser);

      const result = await userService.createUser(userData);
      expect(bcryptMocks.hash).toHaveBeenCalledWith("p1", "s");
      expect(result.password_hash).toBe("hp");
    });

    it("deve lançar erro se o email já existe", async () => {
      repoMocks.findByEmail.mockResolvedValue({ email: "n@t.com" } as User);
      await expect(userService.createUser(userData)).rejects.toThrow("Este email já está cadastrado em nossa base de dados.");
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
      repoMocks.updateUser.mockResolvedValue({ user_uuid: VALID_UUID } as User);

      await userService.updateUser(VALID_UUID, { password_hash: "new" });
      expect(bcryptMocks.hash).toHaveBeenCalledWith("new", "s");
    });

    it("não deve fazer hash se password_hash não for uma string (ex: objeto do Prisma)", async () => {
      repoMocks.updateUser.mockResolvedValue({ user_uuid: VALID_UUID } as User);
      await userService.updateUser(VALID_UUID, { password_hash: { set: "something" } as any });
      expect(bcryptMocks.hash).not.toHaveBeenCalled();
    });

    it("deve atualizar outros campos sem mexer no bcrypt", async () => {
      repoMocks.updateUser.mockResolvedValue({ user_uuid: VALID_UUID, full_name: "X" } as User);
      const result = await userService.updateUser(VALID_UUID, { full_name: "X" });
      expect(bcryptMocks.hash).not.toHaveBeenCalled();
      expect(result.full_name).toBe("X");
    });

    it("deve propagar erro se o repositório falhar", async () => {
      repoMocks.updateUser.mockRejectedValue(new Error("Update failed"));
      await expect(userService.updateUser(VALID_UUID, { full_name: "X" })).rejects.toThrow("Update failed");
    });

    it("deve lançar erro se o id for indefinido", async () => {
      await expect(userService.updateUser(undefined, {})).rejects.toThrow("Usuário não encontrado");
    });

    it("deve lançar erro se o id for inválido", async () => {
      await expect(userService.updateUser("invalid", {})).rejects.toThrow("Usuário não encontrado");
    });
  });

  describe("updateUserByAdmin", () => {
    it("deve editar um usuário com role aluno com sucesso", async () => {
      const mockUser: User = {
        user_uuid: VALID_UUID,
        email: "aluno@test.com",
        full_name: "Aluno",
        role: "aluno" as any,
        avatar_url: null,
        password_hash: "hp",
        created_at: new Date()
      };
      repoMocks.findById.mockResolvedValue(mockUser);
      repoMocks.updateUser.mockResolvedValue({ ...mockUser, full_name: "Novo Nome" });

      const result = await userService.updateUserByAdmin(VALID_UUID, { full_name: "Novo Nome" });
      expect(repoMocks.findById).toHaveBeenCalledWith(VALID_UUID);
      expect(repoMocks.updateUser).toHaveBeenCalledWith(VALID_UUID, { full_name: "Novo Nome" });
      expect(result.full_name).toBe("Novo Nome");
    });

    it("deve lançar erro se o usuário não for um aluno", async () => {
      const mockProf: User = {
        user_uuid: VALID_UUID,
        email: "prof@test.com",
        full_name: "Prof",
        role: "prof" as any,
        avatar_url: null,
        password_hash: "hp",
        created_at: new Date()
      };
      repoMocks.findById.mockResolvedValue(mockProf);

      await expect(userService.updateUserByAdmin(VALID_UUID, { full_name: "X" }))
        .rejects.toThrow("Não é possível editar este usuário, pois ele não é um aluno.");
      expect(repoMocks.updateUser).not.toHaveBeenCalled();
    });

    it("deve lançar erro se o usuário não for encontrado", async () => {
      repoMocks.findById.mockResolvedValue(null);
      await expect(userService.updateUserByAdmin(VALID_UUID, { full_name: "X" }))
        .rejects.toThrow("Usuário não encontrado");
    });
  });

  describe("deleteById", () => {
    it("deve deletar com sucesso", async () => {
      repoMocks.deleteById.mockResolvedValue({ user_uuid: VALID_UUID } as User);
      const result = await userService.deleteById(VALID_UUID);
      expect(result.user_uuid).toBe(VALID_UUID);
    });

    it("deve propagar erro se o repositório falhar", async () => {
      repoMocks.deleteById.mockRejectedValue(new Error("Delete failed"));
      await expect(userService.deleteById(VALID_UUID)).rejects.toThrow("Delete failed");
    });

    it("deve lançar erro se o id for indefinido", async () => {
      await expect(userService.deleteById(undefined)).rejects.toThrow("Usuário não encontrado");
    });

    it("deve lançar erro se o id for inválido", async () => {
      await expect(userService.deleteById("invalid")).rejects.toThrow("Usuário não encontrado");
    });
  });
});
