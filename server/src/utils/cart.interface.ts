import { Document, Types } from "mongoose";

export interface CartLineItem {
  productId: string;
  title: string;
  price: number;
  quantity: number;
  image?: string;
}
export interface CartItem {
  product: Types.ObjectId;
  quantity: number;
}

export interface CartDocument extends Document {
  user: Types.ObjectId;
  items: CartLineItem[];
  totalPrice: number;
}
