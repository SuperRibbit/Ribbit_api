import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { UserRepository } from "../repository/UserRepository.js";
import type { User } from "../generated/prisma/index.js";

const JWT_SECRET = process.env.JWT_SECRET || "supercraft";

interface LoginResponse {
  token: string;
  user: Omit<User, 'password_hash'>;
}

export class AuthService {
  private userRepository = UserRepository.getInstance();

  async login(loginData: any): Promise<LoginResponse> {
    const { email, password } = loginData;

    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error("Email ou senha inválidos");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      throw new Error("Email ou senha inválidos");
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