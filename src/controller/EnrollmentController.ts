import {Route, Tags, Controller, Get, Post, Delete, Path, Request, SuccessResponse, Response,Security} from "tsoa";
import type { AuthRequest } from "../types/express.js";
import { EnrollmentService } from "../service/EnrollmentService.js";

@Route("ribbit/enrollments")
@Tags("Enrollments")
export class EnrollmentController extends Controller {
  private enrollmentService = new EnrollmentService();

  @Post("{courseId}")
  @SuccessResponse("201", "Matrícula realizada com sucesso")
  @Response("404", "Curso não encontrado")
  @Security("bearerAuth")
  public async enroll(@Path() courseId: number, @Request() req: AuthRequest) {
    const studentId = req.user!.id;
    const result = await this.enrollmentService.enroll(studentId, courseId);
    this.setStatus(201);
    return result;
  }

  @Get()
  @Security("bearerAuth")
  public async findByUser(@Request() req: AuthRequest) {
    const userId = req.user!.id;
    return await this.enrollmentService.findByUser(userId);
  }

  @Get("{courseId}/status")
  @Security("bearerAuth")
  public async findEnrollmentStatus(
    @Path() courseId: number,
    @Request() req: AuthRequest,
  ) {
    const studentId = req.user!.id;
    return await this.enrollmentService.findEnrollmentStatus(
      studentId,
      courseId,
    );
  }

  @Delete("{courseId}")
  @SuccessResponse("204", "Desmatriculado com sucesso")
  @Response("404", "Matrícula não encontrada")
  @Security("bearerAuth")
  public async unenrollStudent(
    @Path() courseId: number,
    @Request() req: AuthRequest,
  ): Promise<void> {
    const studentId = req.user!.id;
    await this.enrollmentService.unenrollStudent(studentId, courseId);
    this.setStatus(204);
  }
}
