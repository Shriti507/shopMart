import { Schema, model } from "mongoose";
import { UserDocument } from "../utils/user.interface.js";

const userSchema = new Schema<UserDocument>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ["Member", "Admin"],
    default: "Member",
  },
  phone: {
    type: String,
    sparse: true,
    unique: true,
  },
  password: {
    type: String,
    select: false,
  },
  societyId: {
    type: Schema.Types.ObjectId,
    ref: "Society",
    default: null,
  },
  isOnline: {
    type: Boolean,
    default: false,
  },
  googleId: {
    type: String,
    unique: true,
    sparse: true,
  },
  addresses: [
    {
      fullName: { type: String, required: true },
      phone: { type: String, required: true },
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      pincode: { type: String, required: true },
      isDefault: { type: Boolean, default: false },
    },
  ],
});

export const userModel = model<UserDocument>("User", userSchema);
