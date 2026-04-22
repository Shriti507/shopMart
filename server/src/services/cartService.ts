import { cartModel } from "../models/cart.schema.js";
import type { CartLineItem } from "../utils/cart.interface.js";
import { Types } from "mongoose";

function sumItems(items: CartLineItem[]): number {
  return items.reduce((s, i) => s + i.price * i.quantity, 0);
}

export class CartService {
  async getOrCreateCart(userId: string) {
    let cart = await cartModel.findOne({ user: userId });
    if (!cart) {
      cart = await cartModel.create({
        user: new Types.ObjectId(userId),
        items: [],
        totalPrice: 0,
      });
    }
    return cart;
  }

  async getCart(userId: string) {
    return this.getOrCreateCart(userId);
  }

  async addItem(
    userId: string,
    payload: {
      productId: string;
      title: string;
      price: number;
      quantity?: number;
      image?: string;
    },
  ) {
    const cart = await this.getOrCreateCart(userId);
    const qty = Math.max(1, Math.floor(payload.quantity ?? 1));
    const pid = String(payload.productId);
    const idx = cart.items.findIndex((i) => i.productId === pid);
    if (idx >= 0) {
      cart.items[idx].quantity += qty;
    } else {
      cart.items.push({
        productId: pid,
        title: payload.title,
        price: payload.price,
        quantity: qty,
        image: payload.image ?? "",
      });
    }
    cart.totalPrice = sumItems(cart.items);
    await cart.save();
    return cart;
  }

  async updateItemQuantity(
    userId: string,
    productId: string,
    quantity: number,
  ) {
    const cart = await cartModel.findOne({ user: userId });
    if (!cart) {
      throw new Error("Cart not found");
    }
    const pid = String(productId);
    const idx = cart.items.findIndex((i) => i.productId === pid);
    if (idx < 0) {
      throw new Error("Item not in cart");
    }
    if (quantity <= 0) {
      cart.items.splice(idx, 1);
    } else {
      cart.items[idx].quantity = Math.floor(quantity);
    }
    cart.totalPrice = sumItems(cart.items);
    await cart.save();
    return cart;
  }

  async removeItem(userId: string, productId: string) {
    const cart = await cartModel.findOne({ user: userId });
    if (!cart) {
      throw new Error("Cart not found");
    }
    const pid = String(productId);
    cart.items = cart.items.filter((i) => i.productId !== pid);
    cart.totalPrice = sumItems(cart.items);
    await cart.save();
    return cart;
  }

  async clearCart(userId: string) {
    const cart = await this.getOrCreateCart(userId);
    cart.items = [];
    cart.totalPrice = 0;
    await cart.save();
    return cart;
  }
}
