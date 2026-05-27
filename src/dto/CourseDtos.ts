import type { Course } from "../generated/prisma/index.js";

export type CourseResponse = Course;

export type CourseCreateRequest = Pick<Course, "title" | "description" | "banner_url" | "slug" | "fk_teacher">;

export type CourseUpdateRequest = Partial<Omit<CourseCreateRequest, "fk_teacher">>;
export interface CreateCourseDTO {
    title: string;
    slug: string;
    description?: string;
    banner_url?: string;
    User: {
      connect: {
        user_uuid: string;
      };
    };
  }