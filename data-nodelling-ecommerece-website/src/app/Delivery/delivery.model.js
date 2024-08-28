import mongoose, { Schema } from "mongoose";

const deliveryItemSchema = new Schema({
  itemName: {
    type: Schema.Types.ObjectId,
    ref: "Order", 
    required: true
  },
  itemId: {
    type: String,  
    required: true
  }
}, { _id: false });  


const deliverySchema = new Schema({
  deliveredBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  deliveredDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  deliveredTo: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  deliveredItems: {
    type: [deliveryItemSchema],
    default: [],
    required: true
  }
}, { timestamps: true });

export const Delivery = mongoose.model("Delivery", deliverySchema);
