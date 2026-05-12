import type { ClassMaterial } from "../dto/CourseClassDto.js";
import type { Prisma, Course_class } from "../generated/prisma/index.js";
import { prisma } from "../server.js";

export class CourseClassRepository {
    private static instance: CourseClassRepository;

    static getInstance(): CourseClassRepository {
        if (!this.instance) {
            this.instance = new CourseClassRepository();
        }
        return this.instance;
    }

    async findById(class_id: number): Promise<Course_class | null> {
        return await prisma.course_class.findUnique({ where: { class_id } });
    }

    async findByTitle(title: string): Promise<Course_class | null> {
        return await prisma.course_class.findFirst({ where: { title } })
    }

    async createCourseClass(courseClassData: Prisma.Course_classCreateInput): Promise<Course_class> {
        const created = await prisma.course_class.create({ data: courseClassData });
        console.log("Aula criada com sucesso: ", created);
        return created;
    }

    async updateCourseClass(class_id: number, courseClassData: Prisma.Course_classUpdateInput): Promise<Course_class> {
        const update = await prisma.course_class.update({ where: { class_id }, data: courseClassData });
        console.log("Aula atualizada com sucesso: ", update);
        return update;
    }

    async deleteById(class_id: number): Promise<Course_class> {
        const deleted = await prisma.course_class.delete({ where: { class_id } });
        console.log("Aula removida com sucesso: ", deleted);
        return deleted;
    }

    async findByModuleAndOrder(fk_module: number, index_order: number): Promise<Course_class | null> {
        return await prisma.course_class.findUnique({
            where: { fk_module_index_order: { fk_module, index_order } }
        });
    }

    async findMaterialsById(class_id: number): Promise<ClassMaterial[]> {
        const materials = await prisma.course_class.findUnique({ where: { class_id }, include: { Class_file: true } });
        console.log("Arquivos da aula encontrados: ", materials);
        if(!materials){
            return [];
        }
        return materials.Class_file.map(m => ({
            file_id: m.file_id,
            display_name: m.display_name,
            file_url: m.file_url,
            file_type: m.file_type
        }))
    }
}