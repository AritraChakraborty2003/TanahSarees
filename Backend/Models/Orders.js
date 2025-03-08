import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    order_id: {
      type: String,
      required: true,
    },
    products: {
      type: [Object],
    },
    uinfo: {
      type: String,
    },
    price: {
      type: Number,
    },
    status: {
      type: String,
    },
    transaction_status: {
      type: String,
    },
    T_no: {
      type: String,
    },
  },
  {
    collection: "orders",
    timestamps: true,
  }
);

const OrderObj = mongoose.model("orders", orderSchema);

export default OrderObj;
