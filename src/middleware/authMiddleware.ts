import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supercraft";

declare global {
  namespace Express {
    interface Request {
      user_uuid?: string;
      user_role?: string;
    }
  }
}

interface TokenPayload extends JwtPayload {
    id: string;
    role: string;
}

export const authMiddleware = (
  req: Request, 
  res: Response, 
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ message: "Token não fornecido!" });
    return;
  }

  const parts = authHeader.split(" ");

  if (parts.length !== 2) {
    res.status(401).json({ message: "Erro no Token!" });
    return;
  }

  const scheme = parts[0] as string;
  const token = parts[1] as string;
  
  if (!/^Bearer$/i.test(scheme)) {
    res.status(401).json({ message: "Token malformatado!" });
    return;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as unknown as TokenPayload;
    
    req.user_uuid = decoded.id;
    req.user_role = decoded.role;

    return next();
  } catch (err) {
    res.status(401).json({ message: "Token inválido!" });
    return;
  }
};