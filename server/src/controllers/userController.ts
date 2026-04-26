import { Request, Response } from "express";
import { UserService } from "../services/userService.js";
import { Address } from "../utils/user.interface.js";

interface Params {
  id?: string;
}

interface AuthRequest<P = Params, ResBody = any, ReqBody = any> extends Request<P, ResBody, ReqBody> {
  userId?: string;
}


export default class UserController {
  private userService = new UserService();

  public getProfile = async (req: AuthRequest<{}, any, any>, res: Response): Promise<Response> => {
    try {
      if (!req.userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const user = await this.userService.getProfile(req.userId);
      return res.status(200).json({ user });
    } catch (err: any) {
      return res.status(400).json({ message: err.message || "Internal server error" });
    }
  };

  public updateProfile = async (
    req: AuthRequest<{}, any, { name?: string; phone?: string }>,
    res: Response
  ): Promise<Response> => {
    try {
      if (!req.userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const { name, phone } = req.body;
      const user = await this.userService.updateProfile(req.userId, { name, phone });
      return res.status(200).json({ message: "Profile updated", user });
    } catch (err: any) {
      return res.status(400).json({ message: err.message || "Internal server error" });
    }
  };

  public getAddresses = async (req: AuthRequest<{}, any, any>, res: Response): Promise<Response> => {
    try {
      if (!req.userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const addresses = await this.userService.getAddresses(req.userId);
      return res.status(200).json({ addresses });
    } catch (err: any) {
      return res.status(400).json({ message: err.message || "Internal server error" });
    }
  };

  public addAddress = async (req: AuthRequest<{}, any, Address>, res: Response): Promise<Response> => {
    try {
      if (!req.userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const addresses = await this.userService.addAddress(req.userId, req.body);
      return res.status(201).json({ message: "Address added", addresses });
    } catch (err: any) {
      return res.status(400).json({ message: err.message || "Internal server error" });
    }
  };

  public updateAddress = async (req: AuthRequest<Params, any, Partial<Address>>, res: Response): Promise<Response> => {
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
    } catch (err: any) {
      return res.status(400).json({ message: err.message || "Internal server error" });
    }
  };

  public deleteAddress = async (req: AuthRequest<Params, any, any>, res: Response): Promise<Response> => {
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
    } catch (err: any) {
      return res.status(400).json({ message: err.message || "Internal server error" });
    }
  };

}

