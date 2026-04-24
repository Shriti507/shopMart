import type { Response } from "express";
import type { AuthedRequest } from "../middleware/authMiddleware.js";
import { OrderService } from "../services/orderService.js";

export default class OrderController {
  private orderService = new OrderService();

  public create = async (req: AuthedRequest, res: Response): Promise<void> => {
    try {
      const order = await this.orderService.createFromCart(req.userId!);
      res.status(201).json({
        message: "Order placed",
        order: {
          _id: order._id,
          items: order.items,
          totalAmount: order.totalAmount,
          createdAt: order.createdAt,
        },
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Error";
      res.status(400).json({ message });
    }
  };

  public getOrders = async (req: AuthedRequest, res: Response): Promise<void> => {
    try {
      const orders = await this.orderService.getUserOrders(req.userId!);
      res.status(200).json({ orders });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Error";
      res.status(400).json({ message });
    }
  };
}
