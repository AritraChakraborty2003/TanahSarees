import express from "express";
import { UserGET } from "../Controllers/UserController/userGET.js";
import { userDELETE } from "../Controllers/UserController/userDELETE.js";
import { userPATCH } from "../Controllers/UserController/userPATCH.js";
import { userCheckInfo } from "../Controllers/UserController/userCheckInfo.js";

export const userRouter = express.Router();

userRouter.get("/", UserGET);
userRouter.get("/checkinfo/:id", userCheckInfo);
userRouter.delete("/", userDELETE);
userRouter.patch("/", userPATCH());
