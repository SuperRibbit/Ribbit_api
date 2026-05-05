import type { Course_class } from "../generated/prisma/index.js";

export type CourseClassResponse = Course_class;

export type CourseClassCreateRequest = {
    title: string;
    description: string;
    index_order: number;
    fk_module: number;
};

export type CourseClassUpdateRequest = Partial<CourseClassCreateRequest>;