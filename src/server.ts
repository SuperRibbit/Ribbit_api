import "dotenv/config";
import express, { type Request, type Response } from "express";
import cors from "cors";
import { PrismaClient } from "./generated/prisma/index.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { CourseController } from "./controller/CourseController.js";

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

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});