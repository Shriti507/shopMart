import { Router } from "express";
import CartController from "../controllers/cartController.js";
import { requireAuth } from "../middleware/authMiddleware.js";

export default class CartRoute {
  public router = Router();
  private controller = new CartController();

  constructor() {
    this.router.get("/", requireAuth, this.controller.getCart);
    this.router.post("/add", requireAuth, this.controller.addItem);
    this.router.put("/item", requireAuth, this.controller.updateItem);
    this.router.delete(
      "/item/:productId",
      requireAuth,
      this.controller.removeItem,
    );
    this.router.delete("/", requireAuth, this.controller.clearCart);
  }
}

export const cartRouteInstance = new CartRoute();
