import { Route, Tags, Controller, Post, Body, SuccessResponse, Response, Security, Request, Path, Delete } from "tsoa";
import * as express from "express";
import { ProgressService } from "../service/ProgressService.js";
import type { CompleteClassRequest, ProgressResponse } from "../dto/ProgressDtos.js";
import { AppError } from "../utils/AppError.js";

@Route("ribbit/progress")
@Tags("Progress")
export class ProgressController extends Controller {
  private progressService = new ProgressService();

  @Post()
  @Security("bearerAuth", ["aluno", "prof", "admin"])
  @SuccessResponse("201", "Criado")
  @Response("400", "Erro de validação")
  @Response("404", "Aula não encontrada")
  public async completeClass(
    @Request() req: express.Request,
    @Body() requestBody: CompleteClassRequest
  ): Promise<ProgressResponse> {
    
    const studentId = (req as any).user?.id;

    if (!studentId) {
      throw new AppError("Sessão inválida. Faça login novamente.", 401);
    }

    const newProgress = await this.progressService.markClassAsCompleted(studentId, requestBody.classId);

    this.setStatus(201);
    
    return {
      message: "Aula marcada como concluída.",
      new_course_progress: newProgress
    };
  }

  @Delete("{class_id}")
  @Security("bearerAuth", ["aluno", "prof", "admin"])
  @SuccessResponse("200", "Conclusão removida com sucesso")
  @Response("404", "Registro não encontrado")
  public async removeClassCompletion(
    @Request() req: express.Request,
    @Path() class_id: number
  ): Promise<ProgressResponse> {
    
    const studentId = (req as any).user?.id;

    if (!studentId) {
      throw new AppError("Sessão inválida. Faça login novamente.", 401);
    }
    
    const newProgress = await this.progressService.removeClassCompletion(studentId, class_id);
    this.setStatus(200);
    return {
      message: "Conclusão de aula removida.",
      new_course_progress: newProgress
    };
  }
  
}