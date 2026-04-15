import "dotenv/config";
import express, { type Request, type Response, type NextFunction } from "express";
import cors from "cors";
import { PrismaClient } from "./generated/prisma/index.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { createRequire } from "module";
import { RegisterRoutes } from "./generated/routes.js";
import { setupSwagger } from "./config/swagger.js";

const require = createRequire(import.meta.url);

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
export const prisma = new PrismaClient({ adapter });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
setupSwagger(app);
RegisterRoutes(app);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
