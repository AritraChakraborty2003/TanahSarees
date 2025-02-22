import express from "express";
import { OrderGET } from "../Controllers/OrderController/OrderGET.js";

export const OrderRouter = express.Router();
OrderRouter.get("/", OrderGET);
// OrderRouter.post("/", ImageUploader(), OrderPOST);
