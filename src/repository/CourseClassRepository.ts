import type { Prisma, Course_class } from "../generated/prisma/index.js";
import { prisma } from "../server.js";

export class CourseClassRepository {
    private static instance: CourseClassRepository;

    static getInstance(): CourseClassRepository {
        if(!this.instance) {
            this.instance = new CourseClassRepository();
        }
        return this.instance;
    }
}