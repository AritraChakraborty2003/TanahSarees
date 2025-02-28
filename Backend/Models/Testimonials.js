import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 60,
    },
    sname: {
      type: String,
      required: false,
      trim: true,
      minlength: 3,
      maxlength: 60,
    },
    review: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 1000,
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    photo: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    collection: "testimonials",
    timestamps: true,
  }
);

const TestimonialsObj = mongoose.model("testimonials", testimonialSchema);

export default TestimonialsObj;
