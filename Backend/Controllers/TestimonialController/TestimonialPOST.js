import TestimonialsObj from "../../Models/Testimonials.js";

export const TestimonialPOST = () => {
  return async (req, res) => {
    try {
      const { name, review, rating, sname } = req.body;
      const photo = req.file.filename;
      const testimonial = new TestimonialsObj({
        name,
        sname,
        review,
        rating,
        photo,
      });
      await testimonial.save();
      res.status(201).json(testimonial);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
};
