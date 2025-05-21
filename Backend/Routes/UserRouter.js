import express from "express";
import { UserGET, userGETbyID } from "../Controllers/UserController/userGET.js";
import { userDELETE } from "../Controllers/UserController/userDELETE.js";
import { userPATCH } from "../Controllers/UserController/userPATCH.js";
import { userCheckInfo } from "../Controllers/UserController/userCheckInfo.js";
import { ordersGET } from "../Controllers/UserController/ordersGET.js";
import { getUserOrders } from "../Controllers/UserController/getUserOrders.js";

export const userRouter = express.Router();

userRouter.get("/", UserGET);
userRouter.get("/user/orders", getUserOrders);
userRouter.get("/checkinfo/:id", userCheckInfo);
userRouter.delete("/", userDELETE);
userRouter.patch("/", userPATCH());
userRouter.get("/orders", getUserOrders);
userRouter.get("/:id", userGETbyID);
