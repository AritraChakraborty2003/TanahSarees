import mongoose from "mongoose";

const sareeSchema = new mongoose.Schema(
  {
    sname: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 60,
    },
    type: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 100, // Removed trim (not needed for numbers)
    },
    photo: {
      type: String,
      required: true,
      trim: true,
    },
    material: {
      type: String,
      required: true,
      trim: true,
    },
    colour: {
      type: String,
      required: true,
      trim: true,
    },
    discount: {
      type: Number,
      min: 0,
      max: 100,
      default: 0, // Set default discount to 0
    },
    occasion: {
      type: String,
      trim: true,
    },
    topSelling: {
      type: Boolean, // Changed from String to Boolean
      default: false, // Default is false
    },
    rating: {
      type: Number,
      default: 0, // Added default rating to 0
      min: 0,
      max: 5, // Added min and max rating values
    },
  },
  {
    collection: "Sarees", // Fixed incorrect syntax  this is collection name or table name
    timestamps: true, // Fixed incorrect syntax
  }
);

// export default mongoose.model("Saree", sareeSchema);

const sareeObj = mongoose.model("Sarees", sareeSchema);
export default sareeObj; //
