import type { Course_class } from "../generated/prisma/index.js";

export type CourseClassResponse = Course_class;

export type CourseClassCreateRequest = {
    title: string;
    description: string;
    index_order: number;
    fk_module: number;
};

export type CourseClassCreatedResponse = {
    message: string;
    class_id: number;
}

export type ClassMaterial = {
    file_id: number;
    display_name: string;
    file_url: string | null;
    file_type: string | null;
}

export type CourseClassGetResponse = {
    class_id: number;
    title: string;
    description: string;
    index_order: number;
    fk_module: number;
    materials: ClassMaterial[];
}

export type CourseClassUpdateRequest = Partial<CourseClassCreateRequest>;