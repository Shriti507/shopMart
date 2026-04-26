import type { Response } from "express";
import type { AuthedRequest } from "../middleware/authMiddleware.js";
import { CartService } from "../services/cartService.js";

export default class CartController {
  private cartService = new CartService();

  public getCart = async (req: AuthedRequest, res: Response): Promise<void> => {
    try {
      const cart = await this.cartService.getCart(req.userId!);
      res.status(200).json({
        items: cart.items,
        totalPrice: cart.totalPrice,
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Error";
      res.status(400).json({ message });
    }
  };

  public addItem = async (req: AuthedRequest, res: Response): Promise<void> => {
    try {
      const { productId, title, price, quantity, image } = req.body as Record<
        string,
        unknown
      >;
      if (
        productId === undefined ||
        title === undefined ||
        price === undefined
      ) {
        res
          .status(400)
          .json({ message: "productId, title, and price are required" });
        return;
      }
      const cart = await this.cartService.addItem(req.userId!, {
        productId: String(productId),
        title: String(title),
        price: Number(price),
        quantity: quantity !== undefined ? Number(quantity) : 1,
        image: image !== undefined ? String(image) : "",
      });
      res.status(200).json({
        items: cart.items,
        totalPrice: cart.totalPrice,
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Error";
      res.status(400).json({ message });
    }
  };

  public updateItem = async (
    req: AuthedRequest,
    res: Response,
  ): Promise<void> => {
    try {
      const { productId, quantity } = req.body as Record<string, unknown>;
      if (productId === undefined || quantity === undefined) {
        res
          .status(400)
          .json({ message: "productId and quantity are required" });
        return;
      }
      const cart = await this.cartService.updateItemQuantity(
        req.userId!,
        String(productId),
        Number(quantity),
      );
      res.status(200).json({
        items: cart.items,
        totalPrice: cart.totalPrice,
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Error";
      res.status(400).json({ message });
    }
  };

  public removeItem = async (
    req: AuthedRequest,
    res: Response,
  ): Promise<void> => {
    try {
      const raw = req.params.productId;
      const productId = Array.isArray(raw) ? raw[0] : raw;
      if (!productId) {
        res.status(400).json({ message: "productId required" });
        return;
      }
      const cart = await this.cartService.removeItem(req.userId!, productId);
      res.status(200).json({
        items: cart.items,
        totalPrice: cart.totalPrice,
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Error";
      res.status(400).json({ message });
    }
  };

  public clearCart = async (
    req: AuthedRequest,
    res: Response,
  ): Promise<void> => {
    try {
      const cart = await this.cartService.clearCart(req.userId!);
      res.status(200).json({
        items: cart.items,
        totalPrice: cart.totalPrice,
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Error";
      res.status(400).json({ message });
    }
  };
}
