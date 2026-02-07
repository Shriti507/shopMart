import { Schema,model } from "mongoose";
import { User,UserDocument } from "../utils/user.interface";

const userSchema=new Schema<UserDocument>({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNumber:{
        type:String,
        required:true,
        unique:true
    },
    societyId:{
        type:Schema.Types.ObjectId,
        ref:'Society',              
        default:null
        

    },
    isOnline:{
        type:Boolean,
        default:false
    },
    googleId:{
        type:String,
        unique:true
    }
})

export const userModel=model<UserDocument>('User',userSchema)