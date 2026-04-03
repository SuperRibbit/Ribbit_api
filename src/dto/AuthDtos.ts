import type { User } from "../generated/prisma/index.js";
import type { UserResponse } from "./UserDtos.js";

export type LoginRequest = Pick<User, "email"> & {
  password: string;
};

export interface LoginResponse {
  message: string;
  token: string;
  user: UserResponse;
}