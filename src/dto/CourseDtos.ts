import type { Course } from "../generated/prisma/index.js";

export type CourseResponse = Course;

export type CourseCreateRequest = Pick<Course, "title" | "description" | "slug" | "fk_teacher">;

export type CourseUpdateRequest = Partial<Pick<Course, "title" | "description" | "slug">>;

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