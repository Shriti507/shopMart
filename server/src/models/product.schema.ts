import { Schema, model } from "mongoose";
import { ProductDocument } from "../utils/product.interface.js";

const productSchema = new Schema<ProductDocument>({
  productName: {
    type: String,
    required: true,
    trim: true,
  },

  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  salePrice: {
    type: Number,
    required: true,
    min: 20,
  },
  marketPrice: {
    type: Number,
  },
  type: {
    type: String,
    required: true,
  },

  rating: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
  },
  stock: {
    type: Number,
    default: 50,
  },
  image: {
    type: String,
    default:
      "https://media.istockphoto.com/id/1081889914/photo/close-up-of-different-varieties-of-indian-jujube-apple-isolated-on-green-banana-leaf.jpg?s=1024x1024&w=is&k=20&c=Boaoz76E6imw9x7PNd1bx7sHK3_OuaGfgixmXn6bhiw=",
  },
});

export const productModel = model<ProductDocument>("Product", productSchema);
