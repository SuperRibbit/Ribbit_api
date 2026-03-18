import { Prisma } from "@prisma/client/extension";
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
}