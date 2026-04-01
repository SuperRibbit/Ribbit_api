import { Route, Tags, Controller, Get, Post, Put, Delete, Body, Path, SuccessResponse, Response, Middlewares, Security } from "tsoa";
import { UserService } from "../service/UserService.js";
import type { UserResponse, UserCreateRequest, UserUpdateRequest } from "../dto/UserDtos.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { isProfessor } from "../middleware/roleMiddleware.js";

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
  public async createUser(@Body() requestBody: UserCreateRequest): Promise<UserResponse> {
    const user = await this.userService.createUser(requestBody);

    if (!user) {
      this.setStatus(404);
      throw new Error("Usuário não encontrado para atualização.");
    }

    const { password_hash, ...userWithoutPassword } = user;
    
    this.setStatus(201); 
    return userWithoutPassword;
  }

  @Put("{id}")
  @Security("bearerAuth")
  @Middlewares(authMiddleware)
  public async updateUser(
    @Path() id: string,
    @Body() requestBody: UserUpdateRequest
  ): Promise<UserResponse> {
    const user = await this.userService.updateUser(id, requestBody);

    if (!user) {
      this.setStatus(404);
      throw new Error("Usuário não encontrado para atualização.");
    }

    const { password_hash, ...updatedUser } = user;
    return updatedUser;
  }

  @Delete("{id}")
  @SuccessResponse("204", "Deletado com sucesso")
  @Security("bearerAuth", ["prof"])
  public async deleteById(@Path() id: string): Promise<void> {
    await this.userService.deleteById(id);
    this.setStatus(204);
  }
}