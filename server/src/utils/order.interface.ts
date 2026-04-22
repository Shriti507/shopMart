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
  totalAmount: number;
  status:
    | "Pending"
    | "Confirmed"
    | "Out for Delivery"
    | "Delivered"
    | "Cancelled";
  paymentMethod: "COD" | "UPI";
  paymentStatus: "Pending" | "Paid" | "Failed";
  createdAt: Date;
  updatedAt: Date;
}
