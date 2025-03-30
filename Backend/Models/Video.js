import mongoose from "mongoose";

const GifSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    url: {
      type: String,
      required: false, // ❌ File is NOT required now
    },
  },
  {
    collection: "Gif",
    timestamps: true,
  }
);

const GifObj = mongoose.model("Gif", GifSchema);
export default GifObj;
