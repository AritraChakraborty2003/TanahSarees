import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    order_id: {
      type: String,
      required: true,
    },
    T_no: {
      type: String,
    },
    uinfo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    }, // ✅ Fixed Reference
    pid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sarees",
      required: true,
    }, // ✅ Fixed Reference
    qty: {
      type: Number,
      required: true,
    },
    item_status: {
      type: String,
      enum: [
        "confirmed",
        "packed",
        "shipped",
        "delivered",
        "cancelled",
        "resolved",
        "failed",
        "pending",
      ],
      default: "pending", // ✅ Now this will work
    },
  },
  {
    collection: "orders",
    timestamps: true,
  }
);

const OrderObj = mongoose.model("orders", orderSchema);

export default OrderObj;
