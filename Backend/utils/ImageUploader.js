import multer from "multer";
import fs from "fs";
import path from "path";

export const ImageUploader = () => {
  // Ensure the uploads directory exists
  const uploadDir = "./uploads";
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  // Configure multer storage
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
      // Replace special characters in filename
      const sanitizedFilename = file.originalname
        .replace(/[,"]/g, "") // Remove commas and quotes
        .replace(/\s+/g, "_") // Replace spaces with underscores
        .replace(/[^a-zA-Z0-9._-]/g, ""); // Remove other unwanted characters

      cb(null, Date.now() + "_" + sanitizedFilename); // Add timestamp for uniqueness
    },
  });

  return multer({ storage }).array("files", 10); // Accept up to 10 files
};
