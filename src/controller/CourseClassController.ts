import { Body, Post, Route, Security, SuccessResponse, Response, Tags, Controller, Get, Path, Put, Delete } from "tsoa";
import type { CourseClassCreatedResponse, CourseClassCreateRequest, CourseClassGetResponse, CourseClassResponse, CourseClassUpdateRequest, CourseClassUpdateResponse } from "../dto/CourseClassDto.js";
import { CourseClassService } from "../service/CourseClassService.js";


@Route("/ribbit/classes")
@Tags("CourseClass")
export class CourseClassController extends Controller{
    private courseClassService = new CourseClassService();

    @Post()
    @SuccessResponse(201, "Criado")
    @Response("400", "Erro ao criar aula")
    @Security("bearerAuth", ["prof"])
    public async createCourseClass(@Body() requestBody: CourseClassCreateRequest): Promise<CourseClassCreatedResponse> {
        const courseClass = await this.courseClassService.createCourseClass(requestBody);

        if (!courseClass) {
            this.setStatus(400);
            throw new Error("Erro ao criar aula");
        }
        this.setStatus(201);
        return {
            message: "Aula criada com sucesso!",
            class_id: courseClass.class_id
        };
    }

    @Get("{id}")
    @Response("404", "Aula não encontrada")
    @Security("bearerAuth")
    public async findById(@Path() id: number): Promise<CourseClassGetResponse>{
        const courseClass = await this.courseClassService.findById(id);
        return courseClass;
    }

    @Put("{id}")
    @Response("400", "Erro ao atualizar a aula")
    @Response("404", "Aula não encontrada")
    @Security("bearerAuth", ["prof"])
    public async updateCourseClass(@Path() id: number, @Body() requestBody: CourseClassUpdateRequest): Promise<CourseClassUpdateResponse>{
        const courseClass = await this.courseClassService.updateCourseClass(id, requestBody);

        if(!courseClass){
            this.setStatus(404);
            throw new Error("Aula não encontrada para atualização");
        }
        this.setStatus(200);
        return {
            message: "Aula atualizada com sucesso!",
            class: courseClass
        }
    }

    @Delete("{id}")
    @SuccessResponse("204", "Aula deletada com sucesso")
    @Response("404", "Aula não encontrada")
    @Security("bearerAuth", ["prof"])
    public async deleteCourseClass(@Path() id: number): Promise<void>{
        await this.courseClassService.deleteCourseClass(id);
        this.setStatus(204);
    }
}
