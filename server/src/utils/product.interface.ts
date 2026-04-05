import { Document } from "mongoose";

export interface Product {
  productName: string;
  category: string;
  subCategory: string;
  brand: string;
  salePrice: number;
  marketPrice: number;
  type: string;
  rating: number;
  description: string;
  stock: number;
  image?: string;
}

export interface ProductDocument extends Document, Product {}
