import type { User } from "../generated/prisma/index.js";

export type LoginRequest = Pick<User, "email"> & {
  password: string;
};

export type LoginUserResponse = Pick<User, "user_uuid" | "full_name" | "role" | "avatar_url">;

export interface LoginResponse {
  message: string;
  token: string;
  user: LoginUserResponse;
}