import { prisma } from "../server.js";

export class EnrollmentRepository {
    private static instance: EnrollmentRepository;

    static getInstance(): EnrollmentRepository {
        if(!this.instance) {
            this.instance = new EnrollmentRepository();
        }
        return this.instance;
    }

    async enroll(studentId: string, courseId: number) {
        return await prisma.enrollment.create({
            data: { student_id: studentId, course_id: courseId},
            select: { id_enrollment: true},
        })
    }

    async findByUser(userId: string){
        const enrollments = await prisma.enrollment.findMany({
            where: { User: {user_uuid: userId}},
            select: {
                id_enrollment: true,
                enrolled_at : true,
                progress: true,
                Course: {
                    select: {
                        id_course: true,
                        title: true,
                        banner_url: true,
                        slug: true,
                    },
                },
            },
        });

        return {
            total_enrollments: enrollments.length,
            courses: enrollments.map(({ id_enrollment, Course, ...rest }) => ({
                enrollment_id: id_enrollment,
                ...rest,
                course: {
                    course_id: Course.id_course,
                    title: Course.title,
                    banner_url: Course.banner_url,
                    slug: Course.slug,
                },
            })),
        };
    }

    async findEnrollmentStatus(studentId: string, courseId: number) {
        const enrollment = await prisma.enrollment.findUnique({
            where: {
                student_id_course_id: { student_id: studentId, course_id: courseId },
            },
            select: {
                progress: true,
                enrolled_at: true,
            },
        });

        return {
            is_enrolled: !!enrollment,
            progress: enrollment?.progress ?? 0,
            enrollment_date: enrollment?.enrolled_at ?? null,
        }
    }

    async unenrollStudent(studentId: string, courseId: number): Promise<void> {
        await prisma.enrollment.delete({
            where: {
                student_id_course_id: { student_id: studentId, course_id: courseId},
            },
        });
    }
}