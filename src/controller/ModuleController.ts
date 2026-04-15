import { Route, Tags, Controller, Get, Post, Put, Delete, Body, Path, SuccessResponse, Response, Middlewares, Security, type TsoaResponse } from "tsoa";
import { ModuleService } from "../service/ModuleService.js";
import type { ModuleCreateRequest, ModuleResponse } from "../dto/ModuleDtos.js";

@Route("ribbit/modules")
@Tags("Modules")
export class ModulesController extends Controller {
    private moduleService = new ModuleService();

    @Post()
    @SuccessResponse("201", "Criado")
    @Response("400", "Erro ao criar módulo")
    @Security("bearerAuth", ["prof"])
    public async createModule(@Body() requestBody: ModuleCreateRequest): Promise<ModuleResponse> {
        const module = await this.moduleService.createModule(requestBody);
        if (!module) {
            this.setStatus(400);
            throw new Error("Erro ao criar módulo");
        }
        this.setStatus(201);
        return module;
    }
}