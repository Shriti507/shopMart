import { Document } from "mongoose";

export interface Society{
    name: string;
    code:string;
    location:{
        lat:number;
        lng:number;
    };
    address: string;
    activeCarts:number;
}

export interface SocietyDocument extends Document,Society{}
   