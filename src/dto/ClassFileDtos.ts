import type { Class_file } from "../generated/prisma/index.js";

export type ClassFileResponse = Omit<Class_file, "metadata">;

export interface UploadVideoLinkRequest {
  class_id: number;
  url: string;
  display_name: string;
}

export interface ClassFileActionResponse {
  message: string;
  file: ClassFileResponse;
}