import multer from "multer";
import fs from "fs";
import path from "path";

export const MediaUploaderSingle = () => {
  // Ensure the uploads directory exists
  const uploadDir = "./uploads";
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  // Configure storage
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      const sanitizedFilename = path
        .parse(file.originalname)
        .name.replace(/\s+/g, "_") // Replace spaces with underscores
        .replace(/[^\w.-]/g, ""); // Remove unwanted characters

      const fileExt = path.extname(file.originalname); // Get file extension

      cb(null, `${Date.now()}_${sanitizedFilename}${fileExt}`);
    },
  });

  // File filter: Accept GIF, JPEG, PNG
  const fileFilter = (req, file, cb) => {
    if (["image/gif", "image/jpeg", "image/png"].includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only GIF, JPEG, and PNG files are allowed!"), false);
    }
  };

  return multer({
    storage,
    fileFilter,
    limits: { fileSize: 20 * 1024 * 1024 }, // Limit: 20MB
  }).single("file");
};
