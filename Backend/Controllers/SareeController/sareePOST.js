import sareeObj from "../../Models/Saree.js";
export const SareePOST = () => {
  return async (req, res) => {
    try {
      const {
        sku,
        sname,
        type,
        price,
        material,
        colour,
        discount,
        occasion,
        topSelling,
        rating,
      } = req.body;

      // Function to sanitize filenames
      const sanitizeFilename = (filename) => {
        return filename
          .replace(/[,"]/g, "") // Remove commas and quotes
          .replace(/\s+/g, "_") // Replace spaces with underscores
          .replace(/[^a-zA-Z0-9._-]/g, ""); // Remove unwanted characters
      };

      // Get uploaded file paths and sanitize filenames (only storing filenames, not full paths)
      const imageFilenames = req.files.map((file) =>
        sanitizeFilename(file.filename)
      );
      const photo = imageFilenames[0];
      // Mock database entry (Replace this with actual DB insert)
      const newSaree = new sareeObj({
        sku,
        sname,
        type,
        price,
        material,
        colour,
        discount,
        occasion,
        topSelling,
        rating,
        photo,
        images: imageFilenames.slice(1), // Store only sanitized filenames
      });

      await newSaree.save();

      res
        .status(201)
        .json({ message: "Saree added successfully!", data: newSaree });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Failed to add saree", error: error.message });
    }
  };
};
