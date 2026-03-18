import type { Request, Response } from "express";
import { UserService } from "../service/UserService.js";

export class UserController{
    private userService = new UserService();
    
    async findAll(req: Request, res: Response): Promise<void> {
        try {
          const users = await this.userService.findAll();
          res.status(200).json(users);
        } catch (error: unknown) {
          let message: string = "Não foi possível listar os usuários!";
          if (error instanceof Error) {
            message = error.message;
          }
          res.status(400).json({
            message: message,
          });
        }
    }
    
}