import type {Module} from "../generated/prisma/index.js";

export type ModuleResponsePost = {
    message: string;
    moduleId: number;
};

export type ModuleCreateRequest = Pick<Module, "title" | "description" | "index_order" | "fk_course">;