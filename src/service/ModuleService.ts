import { ModuleRepository } from "../repository/ModuleRepository.js";
import type { Prisma, Module } from "../generated/prisma/index.js";
import { CourseService } from "./CourseService.js";
import { AppError } from "../utils/AppError.js";
import type { ModuleClassSummary } from "../dto/ModuleDtos.js";

export class ModuleService {
    private moduleRepository = ModuleRepository.getInstance();
    private courseService = new CourseService();

    async createModule(moduleData: any): Promise<Module | null> {
        const { title, description, fk_course, index_order } = moduleData;
        const orderConstraint = await this.moduleRepository.findByCourseAndOrder(fk_course, index_order);
        if (orderConstraint) {
            throw new AppError("Já existe um módulo na posição"  + index_order + 
                "deste curso. Escolha outra ordem", 400);
        }

        const course = await this.courseService.findById(fk_course);
        if (!course) {
            throw new AppError("Curso com ID " + fk_course + " não encontrado", 404);
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
            throw new AppError("Módulo com ID " + module_id + " não encontrado ou já foi deletado.", 404);
        }
        await this.moduleRepository.deleteById(module_id);
    }

    async updateModule(module_id: number, moduleData: any): Promise<Module> {
        const existingModule = await this.moduleRepository.findById(module_id);
        if (!existingModule) {
            throw new AppError("Módulo com ID " + module_id + " não encontrado.", 404);
        }

        const targetCourseId = moduleData.fk_course ?? existingModule.fk_course;
        const targetOrder = moduleData.index_order ?? existingModule.index_order;

        await this.courseService.findById(targetCourseId);

        const orderConstraint = await this.moduleRepository.findByCourseAndOrder(targetCourseId, targetOrder);
        if (orderConstraint && orderConstraint.id_module !== module_id) {
            throw new AppError("A posição " + targetOrder + " já está ocupada por outro módulo neste curso.", 400);
        }

        const moduleUpdateInput: Prisma.ModuleUncheckedUpdateInput = {
            title: moduleData.title ?? existingModule.title,
            description: moduleData.description ?? existingModule.description,
            index_order: targetOrder,
            fk_course: targetCourseId
        };

        return await this.moduleRepository.updateById(module_id, moduleUpdateInput);
    }

    async findById(module_id: number): Promise<Module> {
        const module = await this.moduleRepository.findById(module_id);
        if (!module) {
            throw new AppError("Nenhum módulo encontrado com o ID " + module_id + ".", 404);
        }
        return module;
    }

    async getModuleClasses(module_id: number): Promise<ModuleClassSummary[]> {
        await this.findById(module_id);
        return await this.moduleRepository.findClassesByModuleId(module_id);
    }
}