import { userModel } from "../models/user.schema.js";
import { societyModel } from "../models/society.schema.js";
import { UserDocument, User } from "../utils/user.interface.js";
import { SocietyDocument, Society } from "../utils/society.interface.js";
import bcryptjs from "bcryptjs";

export class AuthService {
  async getUserDetails(id: string) {
    return await userModel.findById(id);
  }
  async getSocietyDetails(id: string) {
    return await societyModel.findById(id);
  }

  async createSociety(societyData: Society): Promise<SocietyDocument> {
    const existingSociety = await societyModel.findOne({
      code: societyData.code,
    });
    if (existingSociety) {
      throw new Error("A society with this code already exists.");
    }
    const newSociety = await societyModel.create(societyData);
    console.log("society created.");
    return newSociety;
  }
  async createUser(userData: User): Promise<UserDocument> {
    const existingUser = await userModel.findOne({ email: userData.email });
    if (existingUser) {
      throw new Error("This email is already registered.");
    }
    const salt = await bcryptjs.genSalt(10);
    if (!userData.password) {
      throw new Error("Password is required.");
    }
    const hashedPassword = await bcryptjs.hash(userData.password, salt);

    // replace the raw password with the hashed one by copying all the data but it will overwrite the password

    const secureUserData = {
      ...userData,
      password: hashedPassword,
    };

    const newUser = await userModel.create(secureUserData);
    console.log("user created.");
    return newUser;
  }

  async loginUser(email: string, password: string) {
    // 1. Find user and explicitly select password (since it's hidden by default in schema)
    const user = await userModel.findOne({ email }).select("+password");
    if (!user || !user.password) {
      throw new Error("Invalid email or password");
    }

    // 2. Compare passwords
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid email or password");
    }

    return user;
  }

  async loginSociety(code: string) {
    const society = await societyModel.findOne({ code });
    if (!society) {
      throw new Error("Invalid society code. Please check your society code.");
    }
    return society;
  }
}
