import { Schema, model } from "mongoose";
import { IOrder } from "../utils/order.interface";

const orderSchema=new Schema<IOrder>({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    society:{
        type: Schema.Types.ObjectId,
        ref:'Society',
        required: true,
    },
    items:[
        {
            product:{ 
                type: Schema.Types.ObjectId, 
                ref:'Product', 
                required: true 
            },
            name: { 
                type:String, 
                required:true 
            },
            price: { 
                type:Number, 
                required:true 
            },
            quantity: { 
                type:Number, 
                required:true 
            },
            image: { 
                type:String, 
                required:true 
            }
        }
    ],

    totalAmount:{
        type:Number,
        required: true,
    },
    status:{
        type: String,
        enum: ['Pending','Confirmed','Out for Delivery','Delivered','Cancelled'],
        default:'Pending'
    },
    paymentMethod:{
        type:String,
        enum:['COD','UPI'],
        default:'COD'
    },
    paymentStatus:{
        type:String,
        enum: ['Pending', 'Paid', 'Failed'],
        default:'Pending'
    }
});

export const OrderModel = model<IOrder>('Order', orderSchema);