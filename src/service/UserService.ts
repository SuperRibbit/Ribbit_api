import { Prisma, type User } from "../generated/prisma/index.js";
import { UserRepository } from "../repository/UserRepository.js";
import bcrypt from "bcryptjs";
import { AppError } from "../utils/AppError.js";

export class UserService {
  private userRepository = UserRepository.getInstance();

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  async findById(id: string | undefined): Promise<User> {
    if (!id) {
      throw new AppError("Usuário não encontrado", 404);
    }

    const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    if (!uuidRegex.test(id)) {
      throw new AppError("Usuário não encontrado", 404);
    }
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError("Usuário não encontrado", 404);
    }
    return user;
  }

  async createUser(userData: any): Promise<User | null> {
    const { email, password, full_name, role, avatar_url } = userData;

    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new AppError("Este email já está cadastrado em nossa base de dados.", 409);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userCreateInput: Prisma.UserCreateInput = {
      email,
      password_hash: hashedPassword,
      full_name,
      role,
      avatar_url,
    };

    return await this.userRepository.createUser(userCreateInput);
  }

  async updateUser(id: string | undefined, userData: Prisma.UserUpdateInput): Promise<User | null> {
    if (!id) {
      throw new AppError("Usuário não encontrado", 404);
    }

    const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    if (!uuidRegex.test(id)) {
      throw new AppError("Usuário não encontrado", 404);
    }

    if (userData.password_hash && typeof userData.password_hash === 'string') {
      const salt = await bcrypt.genSalt(10);
      userData.password_hash = await bcrypt.hash(userData.password_hash, salt);
    }

    return await this.userRepository.updateUser(id, userData);
  }

  async deleteById(id: string | undefined): Promise<User | null> {
    if (!id) {
      throw new AppError("Usuário não encontrado", 404);
    }

    const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    if (!uuidRegex.test(id)) {
      throw new AppError("Usuário não encontrado", 404);
    }

    try {
      return await this.userRepository.deleteById(id);
    } catch (error: any) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2003') {
        throw new AppError(
          "Não é possível eliminar a conta: Você ainda é responsável por cursos ativos. Por favor, exclua os seus cursos antes de encerrar a conta.",
          409
        );
      }
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2015') {
        throw new AppError("Usuário não encontrado.", 404);
      }
      throw error;
    }
  }
}
