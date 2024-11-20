import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (req: Request & { userId?: string }, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "No token provided." });
  }
  const [, token] = authHeader.split(" ");
  if (!token) {
    return res.status(401).json({ message: "Token is missing." });
  }
  try {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined in the environment variables.");
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET) as { userId: string; };
    req.userId = decoded.userId;

    return next();
  } catch {
    return res.status(401).json({ message: "Invalid token." });
  }
};
