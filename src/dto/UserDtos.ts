import type { User } from "../generated/prisma/index.js";

export type UserResponse = Omit<User, "password_hash">;

export type UserCreateRequest = Pick<User, "email" | "full_name" | "role" | "avatar_url"> & {
  password: string;
};

export type UserUpdateRequest = Partial<Omit<UserCreateRequest, "password">>;