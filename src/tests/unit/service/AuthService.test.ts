import { describe, it, expect, jest, beforeEach } from "@jest/globals";
import type { User } from "../../../generated/prisma/index.js";

const repoMocks = {
  findByEmail: jest.fn<(email: string) => Promise<User | null>>(),
};

const bcryptCompare = jest.fn<(s: string, hash: string) => Promise<boolean>>();
const jwtSign = jest.fn<(payload: any, secret: string, options: any) => string>();

await jest.unstable_mockModule("../../../src/repository/UserRepository.js", () => ({
  UserRepository: {
    getInstance: () => ({
      findByEmail: repoMocks.findByEmail,
    }),
  },
}));

await jest.unstable_mockModule("bcryptjs", () => ({
  __esModule: true,
  default: {
    compare: bcryptCompare,
  },
}));

await jest.unstable_mockModule("jsonwebtoken", () => ({
  __esModule: true,
  default: {
    sign: jwtSign,
  },
}));

const { AuthService } = await import("../../../service/AuthService.js");

describe("AuthService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("login", () => {
    it("deve retornar token e usuário sem password_hash quando credenciais são válidas", async () => {
      const mockUser: User = {
        user_uuid: "550e8400-e29b-41d4-a716-446655440000",
        email: "a@b.com",
        role: "aluno" as any,
        password_hash: "hashed",
        full_name: "Test User",
        avatar_url: null,
        created_at: new Date("2024-01-01T00:00:00.000Z"),
      };
      repoMocks.findByEmail.mockResolvedValue(mockUser);
      bcryptCompare.mockResolvedValue(true);
      jwtSign.mockReturnValue("jwt-token");

      const service = new AuthService();
      const result = await service.login({ email: "a@b.com", password: "secret" });

      expect(repoMocks.findByEmail).toHaveBeenCalledWith("a@b.com");
      expect(bcryptCompare).toHaveBeenCalledWith("secret", "hashed");
      expect(jwtSign).toHaveBeenCalledWith(
        { id: mockUser.user_uuid, role: mockUser.role },
        expect.any(String),
        { expiresIn: "1d" },
      );
      expect(result.token).toBe("jwt-token");
      expect(result.user).toEqual({
        user_uuid: mockUser.user_uuid,
        email: mockUser.email,
        role: mockUser.role,
        full_name: mockUser.full_name,
        avatar_url: mockUser.avatar_url,
        created_at: mockUser.created_at,
      });
    });

    it("deve lançar erro quando o email não existe", async () => {
      repoMocks.findByEmail.mockResolvedValue(null);

      const service = new AuthService();
      await expect(service.login({ email: "missing@b.com", password: "x" })).rejects.toThrow(
        "Email ou senha inválidos",
      );
      expect(bcryptCompare).not.toHaveBeenCalled();
    });

    it("deve lançar erro quando a senha está incorreta", async () => {
      const mockUser: User = {
        user_uuid: "550e8400-e29b-41d4-a716-446655440000",
        email: "a@b.com",
        role: "aluno" as any,
        password_hash: "hashed",
        full_name: "Test User",
        avatar_url: null,
        created_at: new Date(),
      };
    
      repoMocks.findByEmail.mockResolvedValue(mockUser);
      bcryptCompare.mockResolvedValue(false);
    
      const service = new AuthService();
    
      await expect(
        service.login({ email: "a@b.com", password: "senha_errada" })
      ).rejects.toThrow("Email ou senha inválidos");
    
      expect(bcryptCompare).toHaveBeenCalledWith("senha_errada", "hashed");
      expect(jwtSign).not.toHaveBeenCalled();
    });
  });
});