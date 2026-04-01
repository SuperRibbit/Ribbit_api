import type { Request, Response } from "express";
import { CourseService } from "../service/CourseService.js";

export class CourseController {
  private courseService = new CourseService();

  async findAll(req: Request, res: Response): Promise<void> {
    try {
      const courses = await this.courseService.findAll();
      res.status(200).json(courses);
    } catch (error: unknown) {
      let message: string = "Não foi possível listar os cursos!";
      if (error instanceof Error) {
        message = error.message;
      }
      res.status(400).json({
        message: message,
      });
    }
  }

  async findById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const parsedId = Number(id);
      if (isNaN(parsedId)) {
        res.status(400).json({ message: "ID inválido" });
        return;
      }
      const course = await this.courseService.findById(parsedId);
      res.status(200).json(course);
    } catch (error: unknown) {
      let message: string = "Não foi possível encontrar o curso com esse id!";
      if (error instanceof Error) {
        message = error.message;
      }
      res.status(400).json({
        message: message,
      });
    }
  }

  async findByTitle(req: Request, res: Response): Promise<void> {
    try {
      const { title } = req.params;
      if (!title) {
        res.status(400).json({ message: "Título é obrigatório" });
        return;
      }
      const course = await this.courseService.findByTitle(title as string);
      res.status(200).json(course);
    } catch (error: unknown) {
      let message: string =
        "Não foi possível encontrar o curso com esse título!";
      if (error instanceof Error) {
        message = error.message;
      }
      res.status(400).json({
        message: message,
      });
    }
  }

  async createCourse(req: Request, res: Response): Promise<void> {
    try {
      const course = await this.courseService.createCourse(req.body);

      if (!course) {
        throw new Error("Erro ao criar curso no banco de dados.");
      }

      res.status(201).json({
        message: "Curso cadastrado com sucesso!",
        course: course,
      });
    } catch (error: unknown) {
      let message = "Não foi possível cadastrar o curso!";
      if (error instanceof Error) {
        message = error.message;
      }
      res.status(400).json({
        message: message,
      });
    }
  }

  async updateCourse(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const parseId = Number(id);
      if (isNaN(parseId)) {
        res.status(400).json({ message: "ID inválido" });
        return;
      }

      const course = await this.courseService.updateCourse(parseId, req.body);
      res.status(200).json({
        message: "Curso atualizado com sucesso!",
        course: course,
      });
    } catch (error: unknown) {
      let message = "Não foi possível atualizar o curso!";
      if (error instanceof Error) {
        message = error.message;
      }
      res.status(400).json({
        message: message,
      });
    }
  }

  async deleteById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const parseId = Number(id);
      if (isNaN(parseId)) {
        res.status(400).json({ message: "ID inválido" });
        return;
      }

      const course = await this.courseService.deleteById(parseId);
      res.status(200).json({
        message: "Curso removido com sucesso!",
        course: course,
      });
    } catch (error: unknown) {
      let message = "Não foi possível excluir curso!";
      if (error instanceof Error) {
        message = error.message;
      }
      res.status(400).json({
        message: message,
      });
    }
  }
}
