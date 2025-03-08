import TestimonialsObj from "../../Models/Testimonials.js";

export const ReviewPOST = () => {
  return async (req, res) => {
    try {
      const { name, review, rating, sname, photo } = req.body;
      //   const photo = req.file.filename;
      console.log(req.body);
      const testimonial = new TestimonialsObj({
        name,
        sname,
        review,
        rating,
        photo,
      });
      await testimonial.save();
      res.status(201).json({ message: "Success", testimonial });
    } catch (error) {
      console.log(error.message);
      res.status(400).json({ message: error.message });
    }
  };
};
