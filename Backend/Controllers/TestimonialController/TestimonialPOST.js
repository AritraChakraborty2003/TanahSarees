import TestimonialsObj from "../../Models/Testimonials.js";

export const TestimonialPOST = () => {
  console.log("TestimonialPOST");
  return async (req, res) => {
    try {
      const { name, review, rating, sname } = req.body;

      // Function to sanitize filenames
      const sanitizeFilename = (filename) => {
        return filename
          .replace(/[,"]/g, "") // Remove commas and quotes
          .replace(/\s+/g, "_") // Replace spaces with underscores
          .replace(/[^a-zA-Z0-9._-]/g, ""); // Remove unwanted characters
      };

      const photo = sanitizeFilename(req.file.filename);
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
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  };
};
