import type { User } from "../generated/prisma/index.js";

export type UserResponse = Omit<User, "password_hash">;

export type UserCreateRequest = Pick<User, "email" | "full_name" | "role" > & {
  password: string;
  avatar_url?: string | null;
};

export type UserUpdateRequest = Partial<Omit<UserCreateRequest, "password">>;

export interface UserCreatedResponse {
  message: string;
  user: UserResponse;
}