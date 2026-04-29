import { Body, Post, Route, Security, SuccessResponse, Response, Tags, Controller } from "tsoa";
import type { CourseClassCreateRequest, CourseClassResponse, CourseClassUpdateRequest } from "../dto/CourseClassDto.js";
import { CourseClassService } from "../service/CourseClassService.js";


@Route("/ribbit/classes")
@Tags("CourseClass")
export class CourseClassController extends Controller{
    private courseClassService = new CourseClassService();

    @Post()
    @SuccessResponse(201, "Criado")
    @Response("400", "Erro ao criar aula")
    @Security("bearerAuth", ["prof"])
    public async createCourseClass(@Body() requestBody: CourseClassCreateRequest): Promise<CourseClassResponse> {
        const courseClass = await this.courseClassService.createCourseClass(requestBody);

        if (!courseClass) {
            this.setStatus(400);
            throw new Error("Erro ao criar aula");
        }
        this.setStatus(201);
        return courseClass;
    }
}
