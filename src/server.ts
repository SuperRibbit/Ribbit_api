import "dotenv/config";
import express, { type NextFunction } from "express";
import cors from "cors";
import { PrismaClient } from "./generated/prisma/index.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { createRequire } from "module";
import { RegisterRoutes } from "./generated/routes.js";
import { setupSwagger } from "./config/swagger.js";
import { ValidateError } from "tsoa";
import { AppError } from "./utils/AppError.js";

const require = createRequire(import.meta.url);

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
export const prisma = new PrismaClient({ adapter });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
setupSwagger(app);
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
