import { ModuleRepository } from "../repository/ModuleRepository.js";
import type { Prisma } from "../generated/prisma/index.js";
import type { Module } from "../generated/prisma/index.js";
import { CourseService } from "./CourseService.js";

export class ModuleService {
    private moduleRepository = ModuleRepository.getInstance();
    private courseService = new CourseService();

    async createModule(moduleData: any): Promise<Module | null> {
        const { title, description, fk_course, index_order } = moduleData;
        const orderConstraint = await this.moduleRepository.findByCourseAndOrder(fk_course, index_order);
        if (orderConstraint) {
            throw new Error("Já existe um módulo na posição"  + index_order + 
                "deste curso. Escolha outra ordem");
        }

        const course = await this.courseService.findById(fk_course);
        if (!course) {
            throw new Error("Curso com ID " + fk_course + " não encontrado");
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

    async deleteModule(module_id: number): Promise<void> {
        const module = await this.moduleRepository.findById(module_id);
        if (!module) {
            throw new Error("Módulo com ID " + module_id + " não encontrado ou já foi deletado.");
        }
        await this.moduleRepository.deleteById(module_id);
    }

    async updateModule(module_id: number, moduleData: any): Promise<Module> {
        const existingModule = await this.moduleRepository.findById(module_id);
        if (!existingModule) {
            throw new Error("Módulo com ID " + module_id + " não encontrado.");
        }

        const targetCourseId = moduleData.fk_course;
        const targetOrder = moduleData.index_order;

        await this.courseService.findById(targetCourseId);

        const orderConstraint = await this.moduleRepository.findByCourseAndOrder(targetCourseId, targetOrder);
        if (orderConstraint && orderConstraint.id_module !== module_id) {
            throw new Error(`A posição ${targetOrder} já está ocupada por outro módulo neste curso.`);
        }

        const moduleUpdateInput: Prisma.ModuleUncheckedUpdateInput = {
            title: moduleData.title,
            description: moduleData.description,
            index_order: moduleData.index_order,
            fk_course: moduleData.fk_course
        };

        return await this.moduleRepository.updateById(module_id, moduleUpdateInput);
    }
}