import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { UserRepository } from "../repository/UserRepository.js";
import type { User } from "../generated/prisma/index.js";
import { AppError } from "../utils/AppError.js";
import { EmailService } from "./EmailService.js";

const JWT_SECRET = process.env.JWT_SECRET || "supercraft";

interface LoginServiceResponse {
  token: string;
  user: Omit<User, 'password_hash'>;
}

export class AuthService {
  private userRepository = UserRepository.getInstance();
  private emailService = new EmailService();

  async login(loginData: any): Promise<LoginServiceResponse> {
    const { email, password } = loginData;

    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new AppError("Email ou senha incorretos.", 401);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      throw new AppError("Email ou senha incorretos.", 401);
    }

    const token = jwt.sign(
      { 
        id: user.user_uuid, 
        role: user.role
      }, 
      JWT_SECRET, 
      { expiresIn: "1d" }
    );

    const { password_hash, ...userWithoutPassword } = user;

    return { token, user: userWithoutPassword };
  }

  async forgotPassword(email: string): Promise<void> {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      throw new AppError("Por favor, informe um endereço de e-mail válido.", 400);
    }

    const user = await this.userRepository.findByEmail(email);
    if (user) {
      const secret = JWT_SECRET + user.password_hash;
      const token = jwt.sign({ id: user.user_uuid, email: user.email }, secret, { expiresIn: '15m' });

      this.emailService.sendPasswordResetEmail(user.email, token);
    }
  }

  async resetPassword(token: string, newPassword: string): Promise<void> {
    if (!token || !newPassword) {
      throw new AppError("O link de recuperação é inválido ou já expirou. Por favor, solicite uma nova redefinição.", 400);
    }

    try {
      const decoded = jwt.decode(token) as { id: string, email: string } | null;
      
      if (!decoded || !decoded.id) {
        throw new AppError("Token malformado.", 400);
      }

      const user = await this.userRepository.findById(decoded.id);
      if (!user) {
         throw new AppError("Usuário não encontrado.", 400);
      }

      const secret = JWT_SECRET + user.password_hash;
      jwt.verify(token, secret);

      const salt = await bcrypt.genSalt(10);
      const newPasswordHash = await bcrypt.hash(newPassword, salt);

      await this.userRepository.updatePassword(user.user_uuid, newPasswordHash);

    } catch (error) {
      throw new AppError("O link de recuperação é inválido ou já expirou. Por favor, solicite uma nova redefinição.", 400);
    }
  }
}