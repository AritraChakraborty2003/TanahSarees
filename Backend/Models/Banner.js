import mongoose from "mongoose";

const bannerSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    collection: "banners",
    timestamps: true,
  }
);

const bannerObj = mongoose.model("banners", bannerSchema);

export default bannerObj;
