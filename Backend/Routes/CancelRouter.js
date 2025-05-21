import express from "express";
import { CancelGET } from "../Controllers/CancelController/CancelGET.js";
import { CancelPOST } from "../Controllers/CancelController/CancelPOST.js";
import { CancelDELETE } from "../Controllers/CancelController/CancelDELETE.js";
import { cancelOrder } from "../Controllers/CancelController/cancelOrder.js";

export const CancelRouter = express.Router();

// CancelRouter.get("/", CancelGET);
// CancelRouter.post("/", CancelPOST());
// CancelRouter.delete("/:id", CancelDELETE);
CancelRouter.patch("/", cancelOrder());
