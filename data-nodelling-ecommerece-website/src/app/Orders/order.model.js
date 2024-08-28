import mongoose, { Schema } from "mongoose";

const orderItemSchema = new Schema({
  orderItemId: {
    type: String,
    required: true,
  },
  orderItemName: {
    type: String,  
    required: true,
  },
  orderedItemQuantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new Schema(
  {
    orderedAt: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderedFrom: {
      type: Schema.Types.ObjectId,
      ref: "Store",
    },
    orderDate: {
      type: Date,
      default: Date.now,
      required: true,
    },
    orderStatus: {
      type: String,
      enum: ["pending", "shipped", "delivered"],
      default: "pending",
      required: true,
    },
    orderedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    orderItems: [orderItemSchema], 
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
