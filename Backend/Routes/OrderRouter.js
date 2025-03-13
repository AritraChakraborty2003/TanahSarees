import express from "express";
import { OrderPATCH } from "../Controllers/OrderController/OrderPATCH.js";
import {
  OrderGET,
  OrderGETDetails,
} from "../Controllers/OrderController/OrderGET.js";
import { searchOrders } from "../Controllers/OrderController/OrderSearch.js";

export const OrderRouter = express.Router();
OrderRouter.get("/", OrderGET);
OrderRouter.get("/details", OrderGETDetails);
OrderRouter.get("/:id", searchOrders());
// OrderRouter.post("/", ImageUploader(), OrderPOST);
OrderRouter.patch("/:id", OrderPATCH());
