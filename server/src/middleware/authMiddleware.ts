import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthedRequest extends Request {
  userId?: string;
}

export function requireAuth(
  req: AuthedRequest,
  res: Response,
  next: NextFunction,
): void {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  const token = header.slice(7);
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    res.status(500).json({ message: "Server misconfiguration" });
    return;
  }
  try {
    const decoded = jwt.verify(token, secret) as { id: string };
    req.userId = decoded.id;
    next();
  } catch {
    res.status(401).json({ message: "Invalid or expired token" });
  }
}
