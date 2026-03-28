import { Prisma } from "../generated/prisma/index.js";
import type { User } from "../generated/prisma/index.js";
import { prisma } from "../server.js";


export class UserRepository{
    private static instance: UserRepository;

    static getInstance(): UserRepository {
        if (!this.instance) {
          this.instance = new UserRepository();
        }
        return this.instance;
    }


    async findAll(): Promise<User[]> {
        return await prisma.user.findMany();
    }

    async findById(user_uuid: string): Promise<User | null> {
        return await prisma.user.findUnique({ where: { user_uuid } });
    }

    async findByEmail(email: string): Promise<User | null> {
      return await prisma.user.findUnique({ where: { email } });
    }

    async createUser(userData: Prisma.UserCreateInput): Promise<User | null> {
        const user = await prisma.user.create({ data: userData });
        console.log("Usuário criado com sucesso: ", user);
        return user;
    }

    async updateUser(user_uuid: string, userData: Prisma.UserUpdateInput): Promise<User | null> {
        const updatedUser = await prisma.user.update({ where: { user_uuid }, data: userData });
        console.log("Usuário atualizado com sucesso: ", updatedUser);
        return updatedUser;
      }

    async deleteById(user_uuid: string): Promise<User | null> {
        const deletedUser = await prisma.user.delete({ where: { user_uuid } });
        console.log("Usuário removido com sucesso: ", deletedUser);
        return deletedUser;
    }
}