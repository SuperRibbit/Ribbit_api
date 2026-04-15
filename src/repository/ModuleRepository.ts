import type { Prisma } from "../generated/prisma/index.js";
import type { Module } from "../generated/prisma/index.js";
import { prisma } from "../server.js";

export class ModulesRepository {
    private static instance: ModulesRepository;
    
    static getInstance(): ModulesRepository {
        if (!this.instance) {
          this.instance = new ModulesRepository();
        }
        return this.instance;
    }

    async save(moduleData: Prisma.ModuleCreateInput): Promise<Module | null> {
        const module: Module = await prisma.module.create({ data: moduleData });
        console.log("Módulo criado com sucesso: ", module);
        return module;
    }

    async findByCourseAndOrder(courseId: number, order: number): Promise<Module | null> {
        return await prisma.module.findFirst({
            where: {
                fk_course: courseId,
                index_order: order,
            },
        });
    }
}