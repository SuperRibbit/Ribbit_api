import type {Course_class, Module} from "../generated/prisma/index.js";

export type ModuleResponsePost = {
    message: string;
    moduleId: number;
};

export type ModuleResponsePut = {
    message: string;
    module: Module; 
}

export type ModuleClassesResponse = {
    module_id: number;
    title: string;
    description: string;
    index_order: number;
    classes: Course_class[];
}   

export type ModuleCreateRequest = Pick<Module, "title" | "description" | "index_order" | "fk_course">;