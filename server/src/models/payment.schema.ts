import { Schema, model } from "mongoose";
import { Payment } from "../utils/payment.interface";

const paymentSchema = new Schema<Payment>({
    orderId:{ 
        type: Schema.Types.ObjectId, 
        ref:'Order', 
        required: true 
    },
    userId:{ 
        type: Schema.Types.ObjectId, 
        ref:'User', 
        required:true 
    },
    amount:{ 
        type:Number, 
        required:true 
    },
    
    status:{ 
        type: String, 
        enum:['pending', 'completed', 'failed', 'refunded'], 
        default:'pending' 
    },
    paymentMethod:{ 
        type: String, 
        enum:['UPI', 'COD', 'Card', 'NetBanking'],
        required:true
    },
    gatewayTransactionId:{ 
        type: String 
    },
    gatewaySignature: { 
        type: String 
    }
});

export const PaymentModel = model<Payment>('Payment', paymentSchema);