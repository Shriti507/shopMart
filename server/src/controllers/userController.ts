import { Request, Response } from "express";
import { UserService } from "../services/userService.js";
import { Address } from "../utils/user.interface.js";

interface Params {
  id?: string;
}

interface AuthRequest<P = Params, ResBody = unknown, ReqBody = unknown> extends Request<P, ResBody, ReqBody> {
  userId?: string;
}

export default class UserController {
  private userService = new UserService();

  public getProfile = async (req: AuthRequest<Record<string, never>, unknown, unknown>, res: Response): Promise<Response> => {
    try {
      if (!req.userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const user = await this.userService.getProfile(req.userId);
      return res.status(200).json({ user });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Internal server error";
      return res.status(400).json({ message: errorMessage });
    }
  };

  public updateProfile = async (
    req: AuthRequest<Record<string, never>, unknown, { name?: string; phone?: string }>,
    res: Response
  ): Promise<Response> => {
    try {
      if (!req.userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const { name, phone } = req.body;
      const user = await this.userService.updateProfile(req.userId, { name, phone });
      return res.status(200).json({ message: "Profile updated", user });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Internal server error";
      return res.status(400).json({ message: errorMessage });
    }
  };

  public getAddresses = async (req: AuthRequest<Record<string, never>, unknown, unknown>, res: Response): Promise<Response> => {
    try {
      if (!req.userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const addresses = await this.userService.getAddresses(req.userId);
      return res.status(200).json({ addresses });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Internal server error";
      return res.status(400).json({ message: errorMessage });
    }
  };

  public addAddress = async (req: AuthRequest<Record<string, never>, unknown, Address>, res: Response): Promise<Response> => {
    try {
      if (!req.userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const addresses = await this.userService.addAddress(req.userId, req.body);
      return res.status(201).json({ message: "Address added", addresses });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Internal server error";
      return res.status(400).json({ message: errorMessage });
    }
  };

  public updateAddress = async (req: AuthRequest<Params, unknown, Partial<Address>>, res: Response): Promise<Response> => {
    try {
      if (!req.userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ message: "Address ID is required" });
      }
      const addresses = await this.userService.updateAddress(req.userId, id, req.body);
      return res.status(200).json({ message: "Address updated", addresses });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Internal server error";
      return res.status(400).json({ message: errorMessage });
    }
  };

  public deleteAddress = async (req: AuthRequest<Params, unknown, unknown>, res: Response): Promise<Response> => {
    try {
      if (!req.userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ message: "Address ID is required" });
      }
      const addresses = await this.userService.deleteAddress(req.userId, id);
      return res.status(200).json({ message: "Address deleted", addresses });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Internal server error";
      return res.status(400).json({ message: errorMessage });
    }
  };
}
