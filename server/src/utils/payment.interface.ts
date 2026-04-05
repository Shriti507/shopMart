import { Document, Types } from "mongoose";

export interface Payment extends Document {
  orderId: Types.ObjectId; // links to order
  userId: Types.ObjectId; //links to user
  amount: number;
  status: "pending" | "completed" | "failed" | "refunded";
  paymentMethod: "UPI" | "COD" | "Card" | "NetBanking";
  gatewayTransactionId?: string;
  gatewaySignature?: string;
}
