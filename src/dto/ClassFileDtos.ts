import type { Class_file } from "../generated/prisma/index.js";

export type ClassFileResponse = Omit<Class_file, "metadata"> & {
  metadata: Record<string, any> | null;
};