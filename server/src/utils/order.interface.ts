import { Document, Types } from "mongoose";

export interface Order {
  product: Types.ObjectId;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface IOrder extends Document {
  user: Types.ObjectId;
  society: Types.ObjectId; // to group deliveries
  items: Order[];
  totalAmount: number;
  status:
    | "Pending"
    | "Confirmed"
    | "Out for Delivery"
    | "Delivered"
    | "Cancelled";
  paymentMethod: "COD" | "UPI";
  paymentStatus: "Pending" | "Paid" | "Failed";
}

export interface OrderDocument extends Document, Order {}
