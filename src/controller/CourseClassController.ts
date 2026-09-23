import { Body, Post, Route, Security, SuccessResponse, Response, Tags, Controller, Get, Path, Put, Delete, Request } from "tsoa";
import type { CourseClassCreatedResponse, CourseClassCreateRequest, CourseClassGetResponse, CourseClassResponse, CourseClassUpdateRequest, CourseClassUpdateResponse } from "../dto/CourseClassDto.js";
import { CourseClassService } from "../service/CourseClassService.js";
import { AppError } from "../utils/AppError.js";
import type { AuthRequest } from "../types/express.js";

@Route("/ribbit/classes")
@Tags("CourseClass")
export class CourseClassController extends Controller{
    private courseClassService = new CourseClassService();

    @Post()
    @SuccessResponse(201, "Criado")
    @Response("400", "Erro ao criar aula")
    @Response("403", "Sem permissão para modificar este curso")
    @Security("bearerAuth", ["prof", "admin"])
    public async createCourseClass(
        @Request() req: AuthRequest,
        @Body() requestBody: CourseClassCreateRequest
    ): Promise<CourseClassCreatedResponse> {
        const courseClass = await this.courseClassService.createCourseClass(
            requestBody,
            { id: req.user!.id, role: req.user!.role }
        );

        if (!courseClass) {
            this.setStatus(400);
            throw new AppError("Erro ao criar aula");
        }
        this.setStatus(201);
        return {
            message: "Aula criada com sucesso!",
            class_id: courseClass.class_id
        };
    }

    @Get("{id}")
    @Response("404", "Aula não encontrada")
    @Response("403", "Sem permissão para modificar este curso")
    @Security("bearerAuth")
    public async findById(@Path() id: number): Promise<CourseClassGetResponse>{
        const courseClass = await this.courseClassService.findById(id);
        return courseClass;
    }

    @Put("{id}")
    @Response("400", "Erro ao atualizar a aula")
    @Response("404", "Aula não encontrada")
    @Response("403", "Sem permissão para modificar este curso")
    @Security("bearerAuth", ["prof", "admin"])
    public async updateCourseClass(
        @Path() id: number,
        @Request() req: AuthRequest,
        @Body() requestBody: CourseClassUpdateRequest
    ): Promise<CourseClassUpdateResponse>{
        const courseClass = await this.courseClassService.updateCourseClass(
            id,
            requestBody,
            { id: req.user!.id, role: req.user!.role }
        );

        if(!courseClass){
            this.setStatus(404);
            throw new AppError("Aula não encontrada para atualização");
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
    @Security("bearerAuth", ["prof", "admin"])
    public async deleteCourseClass(
        @Path() id: number,
        @Request() req: AuthRequest
    ): Promise<void>{
        await this.courseClassService.deleteCourseClass(
            id,
            { id: req.user!.id, role: req.user!.role }
        );
        this.setStatus(204);
    }
}
