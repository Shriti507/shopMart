import { Schema, model } from "mongoose";
import { IOrder } from "../utils/order.interface.js";

const orderItemSchema = new Schema({
    productId: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    image: { type: String, default: "" },
}, { _id: false });

const orderSchema = new Schema<IOrder>({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  society: { type: Schema.Types.ObjectId, ref: "Society", default: null },
  items: [orderItemSchema], 
  totalAmount: { type: Number, required: true },
  status: {
    type: String,
    enum: ["Pending", "Confirmed", "Out for Delivery", "Delivered", "Cancelled"],
    default: "Pending"
  },
  paymentMethod: {
    type: String,
    enum: ["COD", "UPI"],
    default: "COD"
  },
  paymentStatus: {
    type: String,
    enum: ["Pending", "Paid", "Failed"],
    default: "Pending"
  }
}, { timestamps: true });

export const orderModel = model<IOrder>("Order", orderSchema);