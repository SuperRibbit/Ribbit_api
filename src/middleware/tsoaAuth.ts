import * as express from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../utils/AppError.js";

const JWT_SECRET = process.env.JWT_SECRET || "supercraft";

export function expressAuthentication(
  request: express.Request,
  securityName: string,
  scopes?: string[]
): Promise<any> {
  if (securityName === "bearerAuth") {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      return Promise.reject(new AppError("Token não fornecido!",401));
    }

    const parts = authHeader.split(" ");
    
    const scheme = parts[0];
    const token = parts[1];

    if (parts.length !== 2 || !scheme || !token || !/^Bearer$/i.test(scheme)) {
      return Promise.reject(new AppError("Token malformatado!",401));
    }

    return new Promise((resolve, reject) => {
      jwt.verify(token, JWT_SECRET, function (err: any, decoded: any) {
        if (err) {
          reject(new AppError("Token inválido!",401));
        } else {
          if (scopes && scopes.length > 0) {
            if (!scopes.includes(decoded.role)) {
              reject(new AppError("Acesso negado! Apenas professores podem realizar esta ação.",403));
              return;
            }
          }
          
          resolve(decoded);
        }
      });
    });
  }

  return Promise.reject(new Error("Método de autenticação desconhecido."));
}