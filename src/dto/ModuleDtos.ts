import type {Module} from "../generated/prisma/index.js";

export type ModuleResponse = Module;

export type ModuleCreateRequest = Pick<Module, "title" | "description" | "index_order" | "fk_course">;