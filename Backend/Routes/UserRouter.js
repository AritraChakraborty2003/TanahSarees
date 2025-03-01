import express from "express";
import { UserGET } from "../Controllers/UserController/userGET.js";
import { userDELETE } from "../Controllers/UserController/userDELETE.js";

export const userRouter = express.Router();

userRouter.get("/", UserGET);
userRouter.delete("/", userDELETE);
