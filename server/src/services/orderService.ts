import { cartModel } from "../models/cart.schema.js";
import { orderModel } from "../models/order.schema.js";

export class OrderService {
  async createFromCart(userId: string) {
    const cart = await cartModel.findOne({ user: userId });
    if (!cart || cart.items.length === 0) {
      throw new Error("Cart is empty");
    }

    const items = cart.items.map((i) => ({
      productId: i.productId,
      name: i.title,
      price: i.price,
      quantity: i.quantity,
      image: i.image ?? "",
    }));

    const totalAmount = items.reduce(
      (s, line) => s + line.price * line.quantity,
      0,
    );

    const order = await orderModel.create({
      user: userId,
      society: null,
      items,
      totalAmount,
    });

    cart.items = [];
    cart.totalPrice = 0;
    await cart.save();

    return order;
  }
}
