import "dotenv/config";
import { defineConfig } from "prisma/config";

const isCLI = process.argv.some(arg => arg.includes('prisma'));
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: isCLI ? process.env.DIRECT_URL : process.env.DATABASE_URL,
  },
});
