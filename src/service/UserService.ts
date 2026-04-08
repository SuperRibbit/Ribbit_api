import type { Prisma, User } from "../generated/prisma/index.js";
import { UserRepository } from "../repository/UserRepository.js";
import bcrypt from "bcryptjs";
import { AppError } from "../utils/AppError.js";

export class UserService{
    private userRepository = UserRepository.getInstance();

    async findAll(): Promise<User[]> {
        return await this.userRepository.findAll();
    }

    async findById(id: string | undefined): Promise<User> {
        if (!id) {
          throw new Error("Usuário não encontrado");
        }
    
        const user = await this.userRepository.findById(id);
    
        if (!user) {
          throw new Error("Usuário não encontrado");
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
          throw new Error("Usuário não encontrado");
        }

        if (userData.password_hash && typeof userData.password_hash === 'string') {
            const salt = await bcrypt.genSalt(10);
            userData.password_hash = await bcrypt.hash(userData.password_hash, salt);
        }

        return await this.userRepository.updateUser(id, userData);
    }

    async deleteById(id: string | undefined): Promise<User | null> {
        if (!id) {
          throw new Error("Usuário não encontrado");
        }
    
        return await this.userRepository.deleteById(id);
    }
    
    
}