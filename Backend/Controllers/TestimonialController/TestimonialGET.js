import TestimonialsObj from "../../Models/Testimonials.js";

export const TestimonialsGET = async (req, res) => {
  try {
    const testimonials = await TestimonialsObj.find();
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
