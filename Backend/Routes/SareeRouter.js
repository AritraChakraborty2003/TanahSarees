import express from "express";
import { SareeGET } from "../Controllers/SareeController/sareeGET.js";
import multer from "multer";
import fs from "fs";
import { SareePOST } from "../Controllers/SareeController/sareePOST.js";

export const SareeRouter = new express.Router();
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

SareeRouter.get("/", SareeGET);
SareeRouter.post("/", upload.single("file"), SareePOST());
