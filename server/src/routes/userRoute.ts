import { Router } from "express";
import UserController from "../controllers/userController.js";
import { requireAuth } from "../middleware/authMiddleware.js";

export default class UserRoute {
  public router = Router();
  private controller = new UserController();

  constructor() {
    this.router.get("/profile", requireAuth, this.controller.getProfile);
    this.router.put("/profile", requireAuth, this.controller.updateProfile);
    this.router.get("/addresses", requireAuth, this.controller.getAddresses);
    this.router.post("/addresses", requireAuth, this.controller.addAddress);
    this.router.put("/addresses/:id", requireAuth, this.controller.updateAddress);
    this.router.delete("/addresses/:id", requireAuth, this.controller.deleteAddress);
  }
}

export const userRouteInstance = new UserRoute();
