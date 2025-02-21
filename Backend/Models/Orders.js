import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v);
        },
        message: "Please enter a valid email address",
      },
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: function (v) {
          return /^\d{10}$/.test(v);
        },
        message: "Please enter a valid phone number",
      },
    },
    item_name: {
      type: String,
      required: true,
      trim: true,
    },
    item_quantity: {
      type: Number,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    additional_number: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: function (v) {
          return /^\d{10}$/.test(v);
        },
        message: "Please enter a valid phone number",
      },
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    images: {
      type: [String],
      required: true,
      trim: true,
    },
  },
  {
    collection: "orders",
    timestamps: true,
  }
);

const OrderObj = mongoose.model("orders", orderSchema);

export default OrderObj;
