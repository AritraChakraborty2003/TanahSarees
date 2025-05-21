import express from "express";
import {
  Checkout,
  PaymentVerification,
} from "../Controllers/PaymentControllers/PaymentController.js";

export const PaymentRouter = express.Router();

PaymentRouter.post("/", Checkout());
PaymentRouter.post("/verification/:id", PaymentVerification());
