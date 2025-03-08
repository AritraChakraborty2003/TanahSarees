import express from "express";
import { OrderPATCH } from "../Controllers/OrderController/OrderPATCH.js";
import { OrderGET } from "../Controllers/OrderController/OrderGET.js";

export const OrderRouter = express.Router();
OrderRouter.get("/", OrderGET);
// OrderRouter.post("/", ImageUploader(), OrderPOST);
OrderRouter.patch("/:id", OrderPATCH());
