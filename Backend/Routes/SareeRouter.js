import express from "express";
import { SareeGET } from "../Controllers/SareeController/sareeGET.js";
import { SareePOST } from "../Controllers/SareeController/sareePOST.js";
import { ImageUploader } from "../utils/ImageUploader.js";

export const SareeRouter = new express.Router();

SareeRouter.get("/", SareeGET);
// SareeRouter.post("/", ImageUploader(), SareePOST());
