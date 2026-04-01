import type { User } from "../generated/prisma/index.js";
import { UserRepository } from "../repository/UserRepository.js";

export class UserService{
    private userRepository = UserRepository.getInstance();

    async findAll(): Promise<User[]> {
        return await this.userRepository.findAll();
    }
}