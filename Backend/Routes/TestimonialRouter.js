import express from "express";
import { TestimonialsGET } from "../Controllers/TestimonialController/TestimonialGET.js";
import { TestimonialPOST } from "../Controllers/TestimonialController/TestimonialPOST.js";
import { ImageUploader } from "../utils/ImageUploader.js";
import { ReviewPOST } from "../Controllers/ReviewControllers/ReviewPOST.js";

export const TestimonialRouter = express.Router();
TestimonialRouter.get("/", TestimonialsGET);
TestimonialRouter.post("/", ImageUploader(), TestimonialPOST());
TestimonialRouter.post("/reviews", ReviewPOST());
