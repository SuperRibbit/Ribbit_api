import "dotenv/config";
import express, { type NextFunction } from "express";
import cors from "cors";
import { PrismaClient } from "./generated/prisma/index.js";
import { PrismaPg } from "@prisma/adapter-pg";
import swaggerUi from "swagger-ui-express";
import { createRequire } from "module";

import { CourseController } from "./controller/CourseController.js";
import { RegisterRoutes } from "./generated/routes.js"; 
import { ValidateError } from "tsoa";
import { AppError } from "./utils/AppError.js";

const require = createRequire(import.meta.url);
const swaggerDocument = require("./generated/swagger.json");

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
// const fileController = new ClassFileController();

app.use(express.json());
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

RegisterRoutes(app);

app.use(function errorHandler(
  err: unknown,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): express.Response | void {
  
  if (err instanceof ValidateError) {
    return res.status(422).json({ message: "Erro de validação.", details: err?.fields });
  }

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  if (err instanceof Error) {
    console.error(err);
    return res.status(500).json({
      message: "Erro interno no servidor.",
    });
  }

  next();
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});