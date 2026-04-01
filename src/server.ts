import "dotenv/config";
import express, { type Request, type Response } from "express";
import cors from "cors";
import { PrismaClient } from "./generated/prisma/index.js";
import { PrismaPg } from "@prisma/adapter-pg";

import { CourseController } from "./controller/CourseController.js";
import { UserController } from "./controller/UserController.js";
import { AuthController } from "./controller/AuthController.js";
import { authMiddleware } from "./middleware/authMiddleware.js";
import { isProfessor } from "./middleware/roleMiddleware.js";
import { ClassFileController } from "./controller/ClassFileController.js";
import { uploadPDF } from "./config/multerConfig.js";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

export const prisma = new PrismaClient({adapter});

const app = express();
const PORT = process.env.PORT || 3000;

const courseController = new CourseController();

app.use(express.json());
app.use(cors());

// Endpoints de Curso 
app.get("/ribbit/courses", courseController.findAll.bind(courseController));
app.get("/ribbit/courses/:id", courseController.findById.bind(courseController));
app.get("/ribbit/courses/title/:title", courseController.findByTitle.bind(courseController));
app.post("/ribbit/courses", courseController.createCourse.bind(courseController));
app.put("/ribbit/courses/:id", courseController.updateCourse.bind(courseController));
app.delete("/ribbit/courses/:id", courseController.deleteById.bind(courseController));
const userController = new UserController();
const authController = new AuthController();
const fileController = new ClassFileController();

app.use(express.json());
app.use(cors());
// Endpoints de Usuarios(Aluno/Professor)
app.get("/ribbit/users", userController.findAll.bind(userController));
app.post("/ribbit/users", userController.createUser.bind(userController));
app.get("/ribbit/users/:id", userController.findById.bind(userController));
app.put("/ribbit/users/:id", userController.updateUser.bind(userController));
app.delete("/ribbit/users/:id",authMiddleware,isProfessor, userController.deleteById.bind(userController));

//Endpoint de autenticação
app.post("/ribbit/login", authController.login.bind(authController));

//Endpoint de upload
app.post(
  "/ribbit/classes/files/pdf",
  uploadPDF.single("file"),
  fileController.uploadClassPDF.bind(fileController)
);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});