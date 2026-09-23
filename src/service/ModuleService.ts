import { ModuleRepository } from "../repository/ModuleRepository.js";
import type { Prisma, Module } from "../generated/prisma/index.js";
import { CourseService } from "./CourseService.js";
import { AppError } from "../utils/AppError.js";
import type { ModuleClassSummary } from "../dto/ModuleDtos.js";
import type { CourseRequester } from "./CourseService.js";

export class ModuleService {
    private moduleRepository = ModuleRepository.getInstance();
    private courseService = new CourseService();

    async ensureCanModifyModule(module_id: number, requester: CourseRequester): Promise<Module> {
        const module = await this.moduleRepository.findById(module_id);
        if (!module) {
            throw new AppError("Módulo com ID " + module_id + " não encontrado.", 404);
        }

        await this.courseService.ensureCanModifyCourse(module.fk_course, requester);
        return module;
    }

    async createModule(moduleData: any, requester: CourseRequester): Promise<Module | null> {
        const { title, description, fk_course, index_order } = moduleData;
        await this.courseService.ensureCanModifyCourse(fk_course, requester);

        const orderConstraint = await this.moduleRepository.findByCourseAndOrder(fk_course, index_order);
        if (orderConstraint) {
            throw new AppError("Já existe um módulo na posição"  + index_order + 
                "deste curso. Escolha outra ordem", 400);
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

    async deleteModule(module_id: number, requester: CourseRequester): Promise<void> {
        await this.ensureCanModifyModule(module_id, requester);
        await this.moduleRepository.deleteById(module_id);
    }

    async updateModule(module_id: number, moduleData: any, requester: CourseRequester): Promise<Module> {
        const existingModule = await this.ensureCanModifyModule(module_id, requester);

        const targetCourseId = moduleData.fk_course ?? existingModule.fk_course;
        const targetOrder = moduleData.index_order ?? existingModule.index_order;

        if (targetCourseId !== existingModule.fk_course) {
            await this.courseService.ensureCanModifyCourse(targetCourseId, requester);
        }

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
