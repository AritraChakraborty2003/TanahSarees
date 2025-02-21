import express from "express";
import { CancelGET } from "../Controllers/CancelController/CancelGET.js";
import { CancelPOST } from "../Controllers/CancelController/CancelPOST.js";

export const CancelRouter = express.Router();

CancelRouter.get("/", CancelGET);
CancelRouter.post("/", CancelPOST());
