import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { UserRepository } from "../repository/UserRepository.js";
import type { User } from "../generated/prisma/index.js";
import { AppError } from "../utils/AppError.js";

const JWT_SECRET = process.env.JWT_SECRET || "supercraft";

interface LoginServiceResponse {
  token: string;
  user: Omit<User, 'password_hash'>;
}

export class AuthService {
  private userRepository = UserRepository.getInstance();

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
}