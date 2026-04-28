import { connect } from "node:http2";
import type { Course_class, Prisma } from "../generated/prisma/index.js";
import { CourseClassRepository } from "../repository/CourseClassRepository.js";

export class CourseClassService {
    private courseClassRepository = CourseClassRepository.getInstance();

    async findById(id: number | undefined): Promise<Course_class> {
        if(!id){
            throw new Error("Insira um curso válido");
        }

        const courseClass = await this.courseClassRepository.findById(id);

        if(!courseClass){
            throw new Error("Curso não encontrado");
        }

        return courseClass;
    }

    async createCourseClass(courseClassData: any): Promise<Course_class | null>{
        const { title, description, index_order, fk_module} = courseClassData;
        const existingCourseClass = await this.courseClassRepository.findByTitle(courseClassData.id);
        if (existingCourseClass != null) {
            throw new Error("Aula já cadastrada")
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
        if(!id || await this.courseClassRepository.findById(id)){
            throw new Error("Aula não encontrada");
        }
        return await this.courseClassRepository.updateCourseClass(id, courseClassData);
    }

    async deleteCourseClass(id: number | undefined): Promise<Course_class | null> {
        if(!id || await this.courseClassRepository.findById(id)){
            throw new Error("Aula não encontrada")
        }

        return await this.courseClassRepository.deleteById(id);
    }
}