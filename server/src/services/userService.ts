import { userModel } from "../models/user.schema.js";
import { Address } from "../utils/user.interface.js";
import { Types } from "mongoose";

export class UserService {
  async getProfile(userId: string) {
    return await userModel.findById(userId);
  }

  async updateProfile(userId: string, data: { name?: string; phone?: string }) {
    return await userModel.findByIdAndUpdate(
      userId,
      { $set: data },
      { new: true }
    );
  }

  async getAddresses(userId: string) {
    const user = await userModel.findById(userId).select("addresses");
    return user?.addresses || [];
  }

  async addAddress(userId: string, address: Address) {
    const user = await userModel.findById(userId);
    if (!user) throw new Error("User not found");

    if (address.isDefault) {
      user.addresses.forEach((a: any) => (a.isDefault = false));
    } else if (user.addresses.length === 0) {
      address.isDefault = true;
    }

    user.addresses.push(address as any);
    await user.save();
    return user.addresses;
  }

  async updateAddress(userId: string, addressId: string, addressData: Partial<Address>) {
    const user = await userModel.findById(userId);
    if (!user) throw new Error("User not found");

    const addressIndex = user.addresses.findIndex(
      (a: any) => a._id.toString() === addressId
    );
    if (addressIndex === -1) throw new Error("Address not found");

    if (addressData.isDefault) {
      user.addresses.forEach((a: any) => (a.isDefault = false));
    }

    const currentAddress = user.addresses[addressIndex];
    user.addresses[addressIndex] = { ...(currentAddress as any).toObject(), ...addressData } as any;
    
    await user.save();
    return user.addresses;
  }

  async deleteAddress(userId: string, addressId: string) {
    const user = await userModel.findById(userId);
    if (!user) throw new Error("User not found");

    user.addresses = user.addresses.filter(
      (a: any) => a._id.toString() !== addressId
    ) as any;

    // if the user deleted the default address, make the first one default
    if (user.addresses.length > 0 && !user.addresses.find((a: any) => a.isDefault)) {
      (user.addresses[0] as any).isDefault = true;
    }

    await user.save();
    return user.addresses;
  }
}
