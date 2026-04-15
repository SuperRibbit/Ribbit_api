import { ModuleRepository } from "../repository/ModuleRepository.js";
import type { Prisma } from "../generated/prisma/index.js";
import type { Module } from "../generated/prisma/index.js";

export class ModuleService {
    private moduleRepository = ModuleRepository.getInstance();

    async createModule(moduleData: any): Promise<Module | null> {
        const { title, description, fk_course, index_order } = moduleData;
        const orderConstraint = await this.moduleRepository.findByCourseAndOrder(fk_course, index_order);
        if (orderConstraint) {
            throw new Error("Já existe um módulo com essa ordem para este curso");
        }

        const moduleCreateInput: Prisma.ModuleCreateInput = {
            title,
            description,
            index_order,
            Course: {
                connect: {
                    id_course: fk_course,
                },
            },
        };

        return await this.moduleRepository.save(moduleCreateInput);
    }
}