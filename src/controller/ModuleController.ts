import { Route, Tags, Controller, Get, Post, Put, Delete, Body, Path, SuccessResponse, Response, Middlewares, Security, type TsoaResponse } from "tsoa";
import { ModuleService } from "../service/ModuleService.js";
import { type ModuleCreateRequest, type ModuleResponsePost, type ModuleResponsePut } from "../dto/ModuleDtos.js";
import { AppError } from "../utils/AppError.js";

@Route("ribbit/modules")
@Tags("Modules")
export class ModulesController extends Controller {
    private moduleService = new ModuleService();

    @Post()
    @SuccessResponse("201", "Criado")
    @Response("400", "Erro ao criar módulo")
    @Security("bearerAuth", ["prof"])
    public async createModule(@Body() requestBody: ModuleCreateRequest): Promise<ModuleResponsePost> {
        try {
            const module = await this.moduleService.createModule(requestBody);
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
            throw new AppError(error.message || "Erro ao criar módulo", 400);
        }
    }

    @Delete("{module_id}")
    @SuccessResponse("204", "Deletado")
    @Response("404", "Módulo não encontrado")
    @Security("bearerAuth", ["prof"])
    public async deleteModule(@Path() module_id: number): Promise<void> {
        try {
            await this.moduleService.deleteModule(module_id);
            this.setStatus(204);
        } catch (error: any) {
            this.setStatus(404);
            throw new AppError(error.message || "Módulo nao encontrado", 404);
        }
    }

    @Put("{module_id}")
    @SuccessResponse("200", "Atualizado")
    @Response("404", "Módulo não encontrado")
    @Response("400", "Erro ao atualizar módulo")
    @Security("bearerAuth", ["prof"])
    public async updateModule(@Path() module_id: number, @Body() requestBody: ModuleCreateRequest): Promise<ModuleResponsePut> {
        try {
            const module = await this.moduleService.updateModule(module_id, requestBody);
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
            this.setStatus(400);
            throw new AppError(error.message || "Erro ao atualizar módulo", 400);
        }
    }
}