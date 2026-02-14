import { userModel } from "../models/user.schema";
import { UserDocument,User } from "../utils/user.interface";

export class AuthService{
    async getDetails(id:string){
        return await userModel.findById(id)

    }
    async createUser(userData:User):Promise<UserDocument>{
        const newUser=await userModel.create(userData)
        console.log("user created.")
        return newUser
    }
    
}