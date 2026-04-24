import { Document, Types } from "mongoose";

export interface OrderLineItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface IOrder extends Document {
  user: Types.ObjectId;
  society: Types.ObjectId | null;
  items: OrderLineItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  totalAmount: number;
  status: "pending" | "shipped" | "delivered" | "cancelled";
  paymentMethod: "COD" | "UPI";
  paymentStatus: "Pending" | "Paid" | "Failed";
  createdAt: Date;
  updatedAt: Date;
}
