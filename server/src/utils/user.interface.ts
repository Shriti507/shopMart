import { Document,Types } from "mongoose";

export interface User{
    name: string;
    email:string
    phoneNumber: string;
    societyId?:Types.ObjectId;
    isOnline:boolean;
    googleId?:string;
}

export interface UserDocument extends Document,User{}
   