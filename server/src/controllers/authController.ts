import { Request, Response } from "express";
import { AuthService } from "../services/authService.js";
import jwt from "jsonwebtoken";

export default class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  private generateToken(id: string): string {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error("JWT_SECRET is not defined in environment variables");
    }
    return jwt.sign({ id }, secret, {
      expiresIn: "30d",
    });
  }

  public registerUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const userData = req.body;
      const newUser = await this.authService.createUser(userData);
      const token = this.generateToken(newUser._id.toString());

      res.status(201).json({
        message: "Registration successful",
        user: {
          _id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        },
        token: token,
      });
    } catch (err: any) {
      if (err.code === 11000) {
        const field = Object.keys(err.keyPattern)[0];
        res.status(400).json({ 
          message: `${field.charAt(0).toUpperCase() + field.slice(1)} already exists` 
        });
        return;
      }
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred";
      res.status(400).json({ message: errorMessage });
    }
  };

  public registerSociety = async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const societyData = req.body;
      const newSociety = await this.authService.createSociety(societyData);

      res.status(201).json({
        message: "Society created successfully",
        society: newSociety,
      });
    } catch (err: any) {
      if (err.code === 11000) {
        const field = Object.keys(err.keyPattern)[0];
        res.status(400).json({ 
          message: `Society ${field} already exists` 
        });
        return;
      }
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred";
      res.status(400).json({ message: errorMessage });
    }
  };

  public loginUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;
      const user = await this.authService.loginUser(email, password);
      const token = this.generateToken(user._id.toString());

      res.status(200).json({
        message: "Login successful",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          societyId: user.societyId,
        },
        token: token,
      });
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred";
      res.status(401).json({ message: errorMessage });
    }
  };

  public loginSociety = async (req: Request, res: Response): Promise<void> => {
    try {
      const { code } = req.body;
      const society = await this.authService.loginSociety(code);
      const token = this.generateToken(society._id.toString());

      res.status(200).json({
        message: "Society login successful",
        society,
        token,
      });
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred";
      res.status(401).json({ message: errorMessage });
    }
  };
}
