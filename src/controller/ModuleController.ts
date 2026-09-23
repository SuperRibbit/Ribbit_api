import { Route, Tags, Controller, Get, Post, Put, Delete, Body, Path, SuccessResponse, Response, Middlewares, Security, Request, type TsoaResponse } from "tsoa";
import { ModuleService } from "../service/ModuleService.js";
import { type ModuleCreateRequest, type ModuleResponsePost, type ModuleResponsePut, type ModuleClassesResponse } from "../dto/ModuleDtos.js";
import { AppError } from "../utils/AppError.js";
import type { Module } from "../generated/prisma/index.js";
import type { AuthRequest } from "../types/express.js";

@Route("ribbit/modules")
@Tags("Modules")
export class ModulesController extends Controller {
    private moduleService = new ModuleService();

    @Post()
    @SuccessResponse("201", "Criado")
    @Response("400", "Erro ao criar módulo")
    @Response("403", "Sem permissão para modificar este curso")
    @Security("bearerAuth", ["prof", "admin"])
    public async createModule(
        @Request() req: AuthRequest,
        @Body() requestBody: ModuleCreateRequest
    ): Promise<ModuleResponsePost> {
        try {
            const module = await this.moduleService.createModule(
                requestBody,
                { id: req.user!.id, role: req.user!.role }
            );
            if (!module) {
                this.setStatus(400);
                throw new AppError("Erro ao criar módulo", 400);
            }
            this.setStatus(201);
            return {
                message: "Módulo criado com sucesso",
                moduleId: module.id_module
            };
        } catch (error: any) {
            if (error instanceof AppError) throw error;
            throw new AppError(error.message || "Erro ao criar módulo", 400);
        }
    }

    @Delete("{module_id}")
    @SuccessResponse("204", "Deletado")
    @Response("404", "Módulo não encontrado")
    @Response("403", "Sem permissão para modificar este curso")
    @Security("bearerAuth", ["prof", "admin"])
    public async deleteModule(
        @Path() module_id: number,
        @Request() req: AuthRequest
    ): Promise<void> {
        try {
            await this.moduleService.deleteModule(
                module_id,
                { id: req.user!.id, role: req.user!.role }
            );
            this.setStatus(204);
        } catch (error: any) {
            if (error instanceof AppError) throw error;
            this.setStatus(404);
            throw new AppError(error.message || "Módulo nao encontrado", 404);
        }
    }

    @Put("{module_id}")
    @SuccessResponse("200", "Atualizado")
    @Response("404", "Módulo não encontrado")
    @Response("400", "Erro ao atualizar módulo")
    @Response("403", "Sem permissão para modificar este curso")
    @Security("bearerAuth", ["prof", "admin"])
    public async updateModule(
        @Path() module_id: number,
        @Request() req: AuthRequest,
        @Body() requestBody: ModuleCreateRequest
    ): Promise<ModuleResponsePut> {
        try {
            const module = await this.moduleService.updateModule(
                module_id,
                requestBody,
                { id: req.user!.id, role: req.user!.role }
            );
            if (!module) {
                this.setStatus(404);
                throw new AppError("Módulo não encontrado", 404);
            }
            this.setStatus(200);
            return {
                message: "Módulo atualizado com sucesso",
                module: module
            };
        } catch (error: any) {
            if (error instanceof AppError) throw error;
            this.setStatus(400);
            throw new AppError(error.message || "Erro ao atualizar módulo", 400);
        }
    }

    @Get("{module_id}/classes")
    @SuccessResponse("200", "Classes encontradas")
    @Response("404", "Módulo não encontrado")
    @Security("bearerAuth", ["prof", "aluno", "admin"])
    public async getModuleClasses(@Path() module_id: number): Promise<ModuleClassesResponse> {
        try {
            const module = await this.moduleService.findById(module_id);
            const classes = await this.moduleService.getModuleClasses(module_id);
            this.setStatus(200);
            return {
                module_id: module.id_module,
                title: module.title,
                description: module.description,
                index_order: module.index_order,
                classes,
            };
        } catch (error: any) {
            this.setStatus(404);
            throw new AppError(error.message || "Classes não encontradas", 404);
        }
    }
}
