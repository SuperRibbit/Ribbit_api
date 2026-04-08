import { Route, Tags, Controller, Get, Post, Put, Delete, Body, Path, SuccessResponse, Response, Middlewares, Security, type TsoaResponse } from "tsoa";
import { CourseService } from "../service/CourseService.js";
import type { CourseCreateRequest, CourseResponse } from "../dto/CourseDtos.js";

@Route("ribbit/courses")
@Tags("Courses")
export class CourseController extends Controller{
  private courseService = new CourseService();

  @Get()
  @Security("bearerAuth")
  public async findAll(): Promise<CourseResponse[]> {
    const courses = await this.courseService.findAll();
    return courses;
  }

  @Get("{id}")
  @Response("404", "Curso não encontrado")
  @Security("bearerAuth")
  public async findById(@Path() id: number): Promise<CourseResponse> {
    const course = await this.courseService.findById(id);
    return course;
  }

  @Get("title/{title}")
  @Response("404", "Curso não encontrado")
  @Security("bearerAuth")
  public async findByTitle(@Path() title: string): Promise<CourseResponse> {
    const course = await this.courseService.findByTitle(title);
    return course;
  }

  @Post()
  @SuccessResponse("201", "Criado")
  @Response("400", "Erro ao criar curso")
  @Security("bearerAuth", ["prof"])
  public async createCourse(@Body() requestBody: CourseCreateRequest): Promise<CourseResponse> {
    const course = await this.courseService.createCourse(requestBody);
    
    if (!course) {
      this.setStatus(400);
      throw new Error("Erro ao criar curso");
    }
    this.setStatus(201);
    return course;
  }

  @Put("{id}")
  @Security("bearerAuth", ["prof"])
  @Response("404", "Curso não encontrado para atualização")
  @Response("400", "Erro ao atualizar curso")
  public async updateCourse(@Path() id: number, @Body() requestBody: CourseCreateRequest): Promise<CourseResponse> {
    const course = await this.courseService.updateCourse(id, requestBody);
    
    if (!course) {
      this.setStatus(404);
      throw new Error("Curso não encontrado para atualização");
    }
    this.setStatus(200);
    return course;
  }

  @Delete("{id}")
  @Security("bearerAuth", ["prof"])
  @SuccessResponse("204", "Deletado com sucesso")
  @Response("404", "Curso não encontrado")
  public async deleteById(@Path() id: number): Promise<void> {
      await this.courseService.deleteById(id);
      this.setStatus(204);
  }
}
