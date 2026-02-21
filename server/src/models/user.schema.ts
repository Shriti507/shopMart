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
    role: { 
        type: String, 
        enum: ['Member', 'Admin'], 
        default: 'Member' 
    },
    phoneNumber:{
        type:String,
        sparse:true,
        unique:true
    },
    password:{
        type:String,
        select:false
        
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
        unique:true,
        sparse:true
    }
})

export const userModel=model<UserDocument>('User',userSchema)