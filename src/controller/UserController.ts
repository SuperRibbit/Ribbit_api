import { Route, Tags, Controller, Get, Post, Put, Delete, Body, Path, SuccessResponse, Response, Middlewares, Security, Request } from "tsoa";
import * as express from "express";
import { UserService } from "../service/UserService.js";
import type { UserResponse, UserCreateRequest, UserUpdateRequest, UserCreatedResponse, UserUpdatedResponse, UserPublicResponse } from "../dto/UserDtos.js";
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

  @Get("me")
  @Security("bearerAuth")
  @SuccessResponse("200", "Perfil do usuário")
  public async getMyProfile(@Request() req: express.Request): Promise<UserResponse> {
    const userId = (req as any).user?.id;

    if (!userId) {
      throw new AppError("Não autorizado. Token não encontrado.", 401);
    }
    const user = await this.userService.findById(userId);

    if (!user) {
      throw new AppError("Usuário não encontrado.", 404);
    }
    const { password_hash, ...userProfile } = user;

    return userProfile;
  }

  @Get("{user_uuid}")
  @Security("bearerAuth")
  @Response("404", "Usuário não encontrado")
  public async findPublicProfile(@Path() user_uuid: string): Promise<UserPublicResponse> {
    const user = await this.userService.findById(user_uuid);
    return {
      user_uuid: user.user_uuid,
      full_name: user.full_name,
      role: user.role,
      avatar_url: user.avatar_url,
      created_at: user.created_at
    };
  }

  @Post()
  @SuccessResponse("201", "Criado")
  public async createUser(@Body() requestBody: UserCreateRequest): Promise<UserCreatedResponse> {
    const user = await this.userService.createUser(requestBody);
    if (!user) {
      throw new AppError("Erro ao criar usuário.", 400);
    }
    const { password_hash, ...userWithoutPassword } = user;

    this.setStatus(201);

    return {
      message: "Usuário criado com sucesso!",
      user: userWithoutPassword
    };
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

  @Delete("me")
  @Security("bearerAuth")
  @SuccessResponse("204", "No Content")
  public async deleteMyAccount(@Request() req: express.Request): Promise<void> {
    const userId = (req as any).user?.id; 
    if (!userId) {
      throw new AppError("Sessão inválida. Por favor, faça login novamente para confirmar a eliminação da conta.", 401);
    }
    await this.userService.deleteById(userId);
    this.setStatus(204);
    return; 
  }
}