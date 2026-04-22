import { Router } from "express";
import OrderController from "../controllers/orderController.js";
import { requireAuth } from "../middleware/authMiddleware.js";

export default class OrderRoute {
  public router = Router();
  private controller = new OrderController();

  constructor() {
    this.router.post("/create", requireAuth, this.controller.create);
  }
}

export const orderRouteInstance = new OrderRoute();
