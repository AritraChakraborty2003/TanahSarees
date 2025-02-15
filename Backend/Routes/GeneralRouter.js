import express from "express";
import { generalGET } from "../Controllers/generalRouter/generalGET.js";

export const generalRouter = express.Router();

generalRouter.get("/", generalGET);
