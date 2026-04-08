import type { User } from "../generated/prisma/index.js";

export type UserResponse = Omit<User, "password_hash">;

export type UserCreateRequest = Pick<User, "email" | "full_name" | "role" > & {
  password: string;
  avatar_url?: string | null;
};

export type UserUpdateRequest = Partial<Pick<User, "full_name" | "avatar_url">>;

export interface UserCreatedResponse {
  message: string;
  user: UserResponse;
}

export interface UserUpdatedResponse {
  message: string;
  user: UserResponse;
}