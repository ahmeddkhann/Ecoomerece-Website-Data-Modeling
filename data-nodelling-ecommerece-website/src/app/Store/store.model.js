import mongoose, { Schema } from "mongoose";

const storeSchema = new Schema(
  {
    product: {
      productId: {
        type: String,
        required: true,
        unique: true,
      },

      name: {
        productName: String,
        req: true,
      },

      price: {
        type: Number,
        required: true,
        beforeDiscount: Number,
        afterDiscount: Number,
        discountPercent: Number,
      },

      stockQuantity: {
        type: Number,
        required: true,
      },
      
      imageUrl: {
        type: String,
        required: true,
      },

      orderAndDeliver: {
        status: {
            type: String,
            enum: ["ordered", "delivered", "cancelled"],      
            required: true         
        },
        orderId: {
            type: Schema.Types.ObjectId,
            ref: 'Order',        
            required: true        
        },
        deliverId: {
            type: Schema.Types.ObjectId,
            ref: 'Deliver',      
            required: false
              
        }
     }
    },
  },
  { timestamps: true }
);

export const Store = mongoose.model("Store", storeSchema);
