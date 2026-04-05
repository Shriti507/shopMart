import { Document, Types } from "mongoose";

export interface CartItem {
  product: Types.ObjectId;
  quantity: number;
}

export interface CartDocument extends Document {
  user: Types.ObjectId;
  items: CartItem[];
  totalPrice: number;
}
