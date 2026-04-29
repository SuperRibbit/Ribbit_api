import { Route, Tags, Controller, Post, Body, SuccessResponse, Response } from "tsoa";
import { AuthService } from "../service/AuthService.js";
import type { LoginRequest, LoginResponse } from "../dto/AuthDtos.js";

@Route("ribbit/auth/login")
@Tags("Auth")
export class AuthController extends Controller {
  private authService = new AuthService();

  @Post()
  @SuccessResponse("200", "Login realizado com sucesso!")
  @Response("401", "Email ou senha incorretos.")
  public async login(@Body() requestBody: LoginRequest): Promise<LoginResponse> {
    const { token, user } = await this.authService.login(requestBody);
    
    this.setStatus(200);
    return {
      message: "Login realizado com sucesso!",
      token: token,
      user: {
        user_uuid: user.user_uuid,
        full_name: user.full_name,
        role: user.role,
        avatar_url: user.avatar_url
      }
    };
  }
}