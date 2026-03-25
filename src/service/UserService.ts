import type { Prisma, users } from "../generated/prisma/index.js";
import { UserRepository } from "../repository/UserRepository.js";
import bcrypt from "bcryptjs";

export class UserService{
    private userRepository = UserRepository.getInstance();

    async findAll(): Promise<users[]> {
        return await this.userRepository.findAll();
    }

    async findById(id: string | undefined): Promise<users> {
        if (!id) {
          throw new Error("Usuário não encontrado");
        }
    
        const user = await this.userRepository.findById(id);
    
        if (!user) {
          throw new Error("Usuário não encontrado");
        }
        return user;
    }

    async createUser(userData: any): Promise<users | null> {
        const { email, password, full_name, role, avatar_url } = userData;    

        const existingUser = await this.userRepository.findByEmail(email);
        if (existingUser) {
            throw new Error("Email já cadastrado");
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
    
        const userCreateInput: Prisma.usersCreateInput = {
          email,
          password_hash: hashedPassword,
          full_name,
          role,
          avatar_url,
        };
    
        return await this.userRepository.createUser(userCreateInput);
    }
    
    async updateUser(id: string | undefined, userData: Prisma.usersUpdateInput): Promise<users | null> {
        if (!id) {
          throw new Error("Usuário não encontrado");
        }

        return await this.userRepository.updateUser(id, userData);
    }

    async deleteById(id: string | undefined): Promise<users | null> {
        if (!id) {
          throw new Error("Usuário não encontrado");
        }
    
        return await this.userRepository.deleteById(id);
    }
    
    
}