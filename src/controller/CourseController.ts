import { Route, Tags, Controller, Get, Post, Put, Delete, Path, Query, SuccessResponse, Response, Request, Security, UploadedFile, FormField } from "tsoa";
import type { AuthRequest } from "../types/express.js";
import { CourseService } from "../service/CourseService.js";

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
  @Security("bearerAuth", ["prof", "admin"])
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
  @Security("bearerAuth", ["prof", "admin"])
  public async updateCourse(
    @Path() courseId: number,
    @FormField() title?: string,
    @FormField() description?: string,
    @FormField() slug?: string,
    @UploadedFile() banner?: Express.Multer.File
  ) {
    return await this.courseService.updateCourse(
      courseId,
      { title, description, slug },
      banner
    );
  }

  @Delete("{courseId}")
  @SuccessResponse("204", "Deletado com sucesso")
  @Response("404", "Curso não encontrado")
  @Security("bearerAuth", ["prof", "admin"])
  public async deleteById(@Path() courseId: number): Promise<void> {
    await this.courseService.deleteById(courseId);
    this.setStatus(204);
  }
}
