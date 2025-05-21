import mongoose from "mongoose";

const SareeTestSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    customer: {
      type: String,
      required: true,
    },
  },
  {
    Collection: "sareestest",
  }
);

const SareeTestObj = mongoose.model("sareestest", SareeTestSchema);

export default SareeTestObj;
