import { Document, Types } from "mongoose";

export interface Address {
  _id?: Types.ObjectId;
  fullName: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
}

export interface User {
  name: string;
  email: string;
  role: string;
  phone?: string;
  password?: string;
  societyId?: Types.ObjectId;
  isOnline: boolean;
  googleId?: string;
  addresses: Address[];
}

export interface UserDocument extends Document, User {}
