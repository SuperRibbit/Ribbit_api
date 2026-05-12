import { Route, Tags, Controller, Post, Body, SuccessResponse, Response } from "tsoa";
import { AuthService } from "../service/AuthService.js";
import type { ForgotPasswordRequest, LoginRequest, LoginResponse, ResetPasswordRequest, SimpleMessageResponse } from "../dto/AuthDtos.js";

@Route("ribbit/auth")
@Tags("Auth")
export class AuthController extends Controller {
  private authService = new AuthService();

  @Post("login")
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

  @Post("forgot-password")
  @SuccessResponse("200", "E-mail de recuperação enviado")
  @Response("400", "E-mail inválido")
  public async forgotPassword(
    @Body() requestBody: ForgotPasswordRequest
  ): Promise<SimpleMessageResponse> {
    
    await this.authService.forgotPassword(requestBody.email);

    this.setStatus(200);
    return {
      message: "Se este e-mail estiver cadastrado, um link de recuperação será enviado em instantes."
    };
  }

  @Post("reset-password")
  @SuccessResponse("200", "Senha atualizada com sucesso")
  @Response("400", "Token inválido ou expirado")
  public async resetPassword(
    @Body() requestBody: ResetPasswordRequest
  ): Promise<SimpleMessageResponse> {
    
    await this.authService.resetPassword(requestBody.token, requestBody.new_password);

    this.setStatus(200);
    return {
      message: "Sua senha foi alterada com sucesso!"
    };
  }
}