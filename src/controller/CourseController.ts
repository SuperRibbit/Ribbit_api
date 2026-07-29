import { Route, Tags, Controller, Get, Post, Put, Delete, Body, Path, Query, SuccessResponse, Response, Request, Security, type TsoaResponse, UploadedFile, FormField } from "tsoa";
import type { AuthRequest } from "../types/express.js";
import { CourseService } from "../service/CourseService.js";
import type { Prisma } from "../generated/prisma/index.js";
import { AppError } from "../utils/AppError.js";

@Route("ribbit/courses")
@Tags("Courses")
export class CourseController extends Controller{
  private courseService = new CourseService();

  @Get()
  @Security("bearerAuth")
  public async findAll(@Query() search?: string) {
    return await this.courseService.findAll(search);
  }

  @Get("user/{userId}")
  @Security("bearerAuth")
  public async findByUser(@Path() userId: string) {
    return await this.courseService.findByUser(userId);
  }

  @Get("{courseId}")
  @Response("404", "Curso não encontrado")
  @Security("bearerAuth")
  public async findById(@Path() courseId: number, @Request() req: AuthRequest) {
    const studentId = req.user?.id;
    return await this.courseService.findById(courseId, studentId);
  }

  @Post()
  @SuccessResponse("201", "Criado")
  @Response("409", "Slug já em uso")
  @Security("bearerAuth", ["prof"])
  public async createCourse(
    @Request() req: AuthRequest,
    @FormField() title: string,
    @FormField() slug: string,
    @FormField() description?: string,
    @UploadedFile() banner?: Express.Multer.File
  ) {
    const teacherUuid = req.user!.id;
    
    const course = await this.courseService.createCourse(
      { title, slug, description },
      teacherUuid,
      banner
    );
    
    this.setStatus(201);
    return course;
  }

  @Put("{courseId}")
  @Response("404", "Curso não encontrado")
  @Response("409", "Slug já em uso")
  @Security("bearerAuth", ["prof"])
  public async updateCourse(
    @Path() courseId: number,
    @Body() body: { title?: string; description?: string; banner_url?: string; slug?: string }
  ) {
    return await this.courseService.updateCourse(courseId, body as Prisma.CourseUpdateInput);
  }

  @Delete("{courseId}")
  @SuccessResponse("204", "Deletado com sucesso")
  @Response("404", "Curso não encontrado")
  @Security("bearerAuth", ["prof"])
  public async deleteById(@Path() courseId: number): Promise<void> {
    await this.courseService.deleteById(courseId);
    this.setStatus(204);
  }
}
