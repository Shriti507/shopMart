import { Response } from "express";
import { AuthedRequest } from "../middleware/authMiddleware.js";
import { UserService } from "../services/userService.js";

export default class UserController {
  private userService = new UserService();

  public getProfile = async (req: AuthedRequest, res: Response): Promise<void> => {
    try {
      const user = await this.userService.getProfile(req.userId!);
      res.status(200).json({ user });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  };

  public updateProfile = async (req: AuthedRequest, res: Response): Promise<void> => {
    try {
      const { name, phone } = req.body;
      const user = await this.userService.updateProfile(req.userId!, { name, phone });
      res.status(200).json({ message: "Profile updated", user });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  };

  public getAddresses = async (req: AuthedRequest, res: Response): Promise<void> => {
    try {
      const addresses = await this.userService.getAddresses(req.userId!);
      res.status(200).json({ addresses });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  };

  public addAddress = async (req: AuthedRequest, res: Response): Promise<void> => {
    try {
      const addresses = await this.userService.addAddress(req.userId!, req.body);
      res.status(201).json({ message: "Address added", addresses });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  };

  public updateAddress = async (req: AuthedRequest, res: Response): Promise<void> => {
    try {
      const addresses = await this.userService.updateAddress(req.userId!, req.params.id, req.body);
      res.status(200).json({ message: "Address updated", addresses });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  };

  public deleteAddress = async (req: AuthedRequest, res: Response): Promise<void> => {
    try {
      const addresses = await this.userService.deleteAddress(req.userId!, req.params.id);
      res.status(200).json({ message: "Address deleted", addresses });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  };
}
