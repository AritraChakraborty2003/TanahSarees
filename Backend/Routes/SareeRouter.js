import express from "express";
import { SareeGET } from "../Controllers/SareeController/sareeGET.js";
import { SareePOST } from "../Controllers/SareeController/sareePOST.js";
import { ImageUploader } from "../utils/ImageUploader.js";
import { sareeDELETE } from "../Controllers/SareeController/sareeDELETE.js";
import { SareePATCH } from "../Controllers/SareeController/sareePATCH.js";
import { SareeGETbyID } from "../Controllers/SareeController/sareeGET.js";
export const SareeRouter = new express.Router();

SareeRouter.get("/", SareeGET);
SareeRouter.get("/:id", SareeGETbyID);
SareeRouter.post("/", ImageUploader(), SareePOST());
SareeRouter.delete("/:id", sareeDELETE);
SareeRouter.patch("/", SareePATCH());
