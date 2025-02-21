import mongoose from "mongoose";

const cancelSchema = new mongoose.Schema(
  {
    item_name: {
      type: String,
      required: true,
      trim: true,
    },
    item_price: {
      type: Number,
      required: true,
      trim: true,
    },
    uname: {
      type: String,
      required: true,
      trim: true,
    },
    info: {
      type: [String],
      required: true,
      trim: true,
    },
    additional_number: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    collection: "cancel",
    timestamps: true,
  }
);

const CancelObj = mongoose.model("cancel", cancelSchema);

export default CancelObj;
