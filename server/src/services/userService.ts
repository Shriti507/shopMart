import { userModel } from "../models/user.schema.js";
import { Address, UserDocument } from "../utils/user.interface.js";
import { Types } from "mongoose";

export class UserService {
  async getProfile(userId: string): Promise<UserDocument | null> {
    return await userModel.findById(userId);
  }

  async updateProfile(
    userId: string,
    data: { name?: string; phone?: string },
  ): Promise<UserDocument | null> {
    return await userModel.findByIdAndUpdate(
      userId,
      { $set: data },
      { new: true },
    );
  }

  async getAddresses(userId: string): Promise<Address[]> {
    const user = await userModel.findById(userId).select("addresses");
    return user?.addresses || [];
  }

  async addAddress(userId: string, address: Address): Promise<Address[]> {
    const user = await userModel.findById(userId);
    if (!user) throw new Error("User not found");

    if (address.isDefault) {
      user.addresses.forEach((a) => (a.isDefault = false));
    } else if (user.addresses.length === 0) {
      address.isDefault = true;
    }

    user.addresses.push(address as unknown as Address);
    await user.save();
    return user.addresses;
  }

  async updateAddress(
    userId: string,
    addressId: string,
    addressData: Partial<Address>,
  ): Promise<Address[]> {
    const user = await userModel.findById(userId);
    if (!user) throw new Error("User not found");

    const addressIndex = user.addresses.findIndex(
      (a) => a._id?.toString() === addressId,
    );
    if (addressIndex === -1) throw new Error("Address not found");

    if (addressData.isDefault) {
      user.addresses.forEach((a) => (a.isDefault = false));
    }

    const currentAddress = user.addresses[addressIndex];
    user.addresses[addressIndex] = {
      ...currentAddress,
      ...addressData,
    } as Address;

    await user.save();
    return user.addresses;
  }

  async deleteAddress(userId: string, addressId: string): Promise<Address[]> {
    const user = await userModel.findById(userId);
    if (!user) throw new Error("User not found");

    user.addresses = user.addresses.filter(
      (a) => a._id?.toString() !== addressId,
    ) as unknown as Types.DocumentArray<Address>;

    // if the user deleted the default address, make the first one default
    if (user.addresses.length > 0 && !user.addresses.find((a) => a.isDefault)) {
      user.addresses[0].isDefault = true;
    }

    await user.save();
    return user.addresses;
  }
}
