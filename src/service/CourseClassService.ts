import type { Course_class, Prisma } from "../generated/prisma/index.js";
import { CourseClassRepository } from "../repository/CourseClassRepository.js";
import type { CourseClassGetResponse } from "../dto/CourseClassDto.js";
import { AppError } from "../utils/AppError.js";

export class CourseClassService {
    private courseClassRepository = CourseClassRepository.getInstance();

    async findById(id: number | undefined): Promise<CourseClassGetResponse> {
        if(!id){
            throw new AppError("Insira um id de aula válido", 404);
        }

        const courseClass = await this.courseClassRepository.findById(id);
        
        if(!courseClass){
            throw new AppError(`Nenhuma aula encontrada com o ID ${id}`);
        }

        const materials = await this.courseClassRepository.findMaterialsById(id);

        return {
            class_id: courseClass.class_id,
            title: courseClass.title,
            description: courseClass.description,
            index_order: courseClass.index_order,
            fk_module: courseClass.fk_module,
            materials: materials
        };
    }

    async createCourseClass(courseClassData: any): Promise<Course_class | null>{
        const { title, description, index_order, fk_module} = courseClassData;
        const existingCourseClass = await this.courseClassRepository.findByModuleAndOrder(fk_module, index_order);
        if (existingCourseClass != null) {
            throw new AppError(`Já existe uma aula na posição ${index_order} deste módulo. Escolha outra ordem ou reordene as aulas existentes.`);
        }

        const Course_classCreateInput: Prisma.Course_classCreateInput = {
            title,
            description,
            index_order,
            Module: {
                connect:  {
                    id_module: fk_module
                }
            }
        };

        return await this.courseClassRepository.createCourseClass(Course_classCreateInput);
    }

    async updateCourseClass(
        id: number | undefined,
        courseClassData: any
    ): Promise<Course_class | null>{
        if(!id || !(await this.courseClassRepository.findById(id))){
            throw new AppError("Aula não encontrada");
        }
        return await this.courseClassRepository.updateCourseClass(id, courseClassData);
    }

    async deleteCourseClass(id: number | undefined): Promise<Course_class | null> {
        if(!id || !(await this.courseClassRepository.findById(id))){
            throw new AppError("Aula não encontrada")
        }

        return await this.courseClassRepository.deleteById(id);
    }
}