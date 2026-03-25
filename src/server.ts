import "dotenv/config";
import express, { type Request, type Response } from "express";
import cors from "cors";
import { PrismaClient } from "./generated/prisma/index.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { UserController } from "./controller/UserController.js";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

export const prisma = new PrismaClient({adapter});

const app = express();
const PORT = process.env.PORT || 3000;

const userController = new UserController();

app.use(express.json());
app.use(cors());
// Endpoints de Usuarios(Aluno/Professor)
app.get("/ribbit/users", userController.findAll.bind(userController));
app.post("/ribbit/users", userController.createUser.bind(userController));
app.get("/ribbit/users/:id", userController.findById.bind(userController));
app.put("/ribbit/users/:id", userController.updateUser.bind(userController));
app.delete("/ribbit/users/:id", userController.deleteById.bind(userController));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});