import type { Course } from "../generated/prisma/index.js";

export type CourseResponse = Course;

export type CourseCreateRequest = Pick<Course, "title" | "description" | "banner_url" | "slug" | "fk_teacher">;

export type CourseUpdateRequest = Partial<Omit<CourseCreateRequest, "fk_teacher">>;