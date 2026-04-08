import { Route, Tags, Controller, Get, Post, Put, Delete, Body, Path, SuccessResponse, Response, Middlewares, Security, Request } from "tsoa";
import * as express from "express";
import { UserService } from "../service/UserService.js";
import type { UserResponse, UserCreateRequest, UserUpdateRequest, UserCreatedResponse, UserUpdatedResponse } from "../dto/UserDtos.js";
import { AppError } from "../utils/AppError.js";

@Route("ribbit/users")
@Tags("Users")
export class UserController extends Controller {
  private userService = new UserService();

  @Get()
  public async findAll(): Promise<UserResponse[]> {
    const users = await this.userService.findAll();
    return users.map(({ password_hash, ...user }) => user);
  }

  @Get("{id}")
  @Response("404", "Usuário não encontrado")
  public async findById(@Path() id: string): Promise<UserResponse> {
    const { password_hash, ...user } = await this.userService.findById(id);
    return user;
  }

  @Post()
  @SuccessResponse("201", "Criado")
  @Response("400", "Email já cadastrado")
  public async createUser(@Body() requestBody: UserCreateRequest): Promise<UserCreatedResponse> {
    try {
      const user = await this.userService.createUser(requestBody);

      if (!user) {
        this.setStatus(404);
        throw new Error("Usuário não encontrado para atualização.");
      }

      const { password_hash, ...userWithoutPassword } = user;
      
      this.setStatus(201); 
      
      return {
        message: "Usuário criado com sucesso!",
        user: userWithoutPassword
      };

    } catch (error: any) {
      if (error.message === "Este email já está cadastrado em nossa base de dados.") {
        this.setStatus(400);
      }
      throw error;
    }
  }

  @Put("me")
  @Security("bearerAuth")
  @SuccessResponse("200", "Atualizado com sucesso")
  public async updateProfile(
    @Request() req: express.Request,
    @Body() requestBody: UserUpdateRequest
  ): Promise<UserUpdatedResponse> {
    const userId = (req as any).user?.id; 

    if (!userId) {
      throw new AppError("Não autorizado. Token não encontrado.", 401);
    }

    const user = await this.userService.updateUser(userId, requestBody);

    if (!user) {
      throw new AppError("Usuário não encontrado.", 404);
    }

    const { password_hash, ...updatedUser } = user;
    
    return {
      message: "Perfil atualizado com sucesso!",
      user: updatedUser
    };
  }

  @Delete("{id}")
  @SuccessResponse("204", "Deletado com sucesso")
  @Security("bearerAuth", ["prof"])
  public async deleteById(@Path() id: string): Promise<void> {
    await this.userService.deleteById(id);
    this.setStatus(204);
  }
}