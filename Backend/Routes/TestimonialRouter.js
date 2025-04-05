import express from "express";
import { TestimonialsGET } from "../Controllers/TestimonialController/TestimonialGET.js";
import { TestimonialPOST } from "../Controllers/TestimonialController/TestimonialPOST.js";
import { ImageUploaderSingle } from "../utils/ImageUploaderSingle.js";
import { ReviewPOST } from "../Controllers/ReviewControllers/ReviewPOST.js";

export const TestimonialRouter = express.Router();
TestimonialRouter.get("/", TestimonialsGET);
TestimonialRouter.post("/", ImageUploaderSingle(), TestimonialPOST());
TestimonialRouter.post("/reviews", ReviewPOST());
