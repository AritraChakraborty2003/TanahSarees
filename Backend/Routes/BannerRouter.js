import express from "express";
import { BannerGET } from "../Controllers/BannerControllers/BannerGET.js";
import { BannerPOST } from "../Controllers/BannerControllers/BannerPOST.js";
import { ImageUploaderSingle } from "../utils/ImageUploaderSingle.js";
import BannerDelete from "../Controllers/BannerControllers/BannerDelete.js";

export const BannerRouter = express.Router();

BannerRouter.get("/", BannerGET);
BannerRouter.post("/", ImageUploaderSingle(), BannerPOST());
BannerRouter.delete("/", BannerDelete);
