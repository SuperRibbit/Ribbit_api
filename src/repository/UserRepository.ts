import { Prisma } from "../generated/prisma/index.js";
import type { users } from "../generated/prisma/index.js";
import { prisma } from "../server.js";


export class UserRepository{
    private static instance: UserRepository;

    static getInstance(): UserRepository {
        if (!this.instance) {
          this.instance = new UserRepository();
        }
        return this.instance;
    }


    async findAll(): Promise<users[]> {
        return await prisma.users.findMany();
    }

    async findById(user_uuid: string): Promise<users | null> {
        return await prisma.users.findUnique({ where: { user_uuid } });
    }
    
    async findByEmail(email: string): Promise<users | null> {
      return await prisma.users.findUnique({ where: { email } });
    }

    async createUser(userData: Prisma.usersCreateInput): Promise<users | null> {
        const user = await prisma.users.create({ data: userData });
        console.log("Usuário criado com sucesso: ", user);
        return user;
    }

    async updateUser(user_uuid: string, userData: Prisma.usersUpdateInput): Promise<users | null> {
        const updatedUser = await prisma.users.update({ where: { user_uuid }, data: userData });
        console.log("Usuário atualizado com sucesso: ", updatedUser);
        return updatedUser;
      }

    async deleteById(user_uuid: string): Promise<users | null> {
        const deletedUser = await prisma.users.delete({ where: { user_uuid } });
        console.log("Usuário removido com sucesso: ", deletedUser);
        return deletedUser;
    }
}