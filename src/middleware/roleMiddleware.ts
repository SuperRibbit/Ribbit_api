import type { Request, Response, NextFunction } from "express";

export const isProfessor = (
  req: Request, 
  res: Response, 
  next: NextFunction
): void => {  
  if (req.user_role !== "prof") {
    res.status(403).json({ 
      message: "Acesso negado! Apenas professores podem realizar esta ação." 
    });
    return;
  }
  return next();
};