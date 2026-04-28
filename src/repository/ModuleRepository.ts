import type { Prisma } from "../generated/prisma/index.js";
import type { Module } from "../generated/prisma/index.js";
import { prisma } from "../server.js";

export class ModuleRepository {
    private static instance: ModuleRepository;
    
    static getInstance(): ModuleRepository {
        if (!this.instance) {
          this.instance = new ModuleRepository();
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

    async findById(module_id: number): Promise<Module | null> {
        return await prisma.module.findUnique({
            where: {
                id_module: module_id,
            },
        });
    }

    async deleteById(module_id: number): Promise<void> {
        await prisma.module.delete({
            where: {
                id_module: module_id,
            },
        });
        console.log("Módulo removido com sucesso: ", module_id);
        return;
    }
}