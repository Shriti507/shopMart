import { Schema,model } from "mongoose";
import { SocietyDocument,Society } from "../utils/society.interface.js";

const societySchema=new Schema<SocietyDocument>({
    name:{
        type:String,
        required:true,
    },
   
    code:{
        type:String,
        required:true,
        unique:true,
        uppercase:true
    },
    address:{
        
        type:String,
        required:true
        
    },
    location: {
        lat:{ 
            type: Number, 
            required: true 
        },
        lng:{ 
            type: Number, 
            required: true 
        }
    },
   
    activeCarts:{
        type:Number,
        default:0
    }
})

export const societyModel=model<SocietyDocument>('Society',societySchema)