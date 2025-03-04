import express from "express";

import {
  DecreaseCartPatch,
  generalCartPatch,
  IncreaseCartPatch,
  RemoveCartItem,
} from "../Controllers/CartControllers/CartControllers.js";
export const cartRouter = express.Router();

cartRouter.patch("/", generalCartPatch());
cartRouter.patch("/increase", IncreaseCartPatch());
cartRouter.patch("/decrease", DecreaseCartPatch());
cartRouter.patch("/remove", RemoveCartItem());
