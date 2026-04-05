import { Schema, model } from "mongoose";
import { CartDocument } from "../utils/cart.interface.js";

const cartSchema = new Schema<CartDocument>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    requried: true,
    unique: true, //one cart per user
  },
  items: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product", // links to Product Inventory
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1, // can't add 0 items
        default: 1,
      },
    },
  ],
  totalPrice: {
    type: Number,
    default: 0,
  },
});

export const cartModel = model<CartDocument>("Cart", cartSchema);
