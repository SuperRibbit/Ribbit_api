import type { Request, Response } from "express";
import { AuthService } from "../service/AuthService.js";

export class AuthController {
  private authService = new AuthService();

  async login(req: Request, res: Response): Promise<void> {
    try {
      const { token, user } = await this.authService.login(req.body);
      
      res.status(200).json({
        message: "Login realizado com sucesso!",
        token: token,
        user: user
      });
    } catch (error: unknown) {
      let message = "Erro no login";
      if (error instanceof Error) message = error.message;
      res.status(401).json({ message });
    }
  }
}