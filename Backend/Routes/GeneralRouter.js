import express from "express";
import { generalGET } from "../Controllers/generalController/generalGET.js";

export const generalRouter = express.Router();

generalRouter.get("/", generalGET);
