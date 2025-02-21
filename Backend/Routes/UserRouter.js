import express from "express";
import { UserGET } from "../Controllers/UserController/userGET.js";

export const userRouter = express.Router();

userRouter.get("/", UserGET);
