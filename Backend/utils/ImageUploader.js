import multer from "multer";
import fs from "fs";
export const ImageUploader = () => {
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      var dir = "./uploads";
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      cb(null, dir);
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });

  var upload = multer({ storage: storage });
  return upload.single("file");
};
