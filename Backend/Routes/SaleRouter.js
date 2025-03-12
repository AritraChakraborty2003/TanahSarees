import express from "express";
import { salesGET } from "../Controllers/SalesController/salesGET.js";
import { salesPOST } from "../Controllers/SalesController/salesPOST.js";
export const SaleRouter = express.Router();

SaleRouter.get("/", salesGET);
SaleRouter.post("/", salesPOST());
