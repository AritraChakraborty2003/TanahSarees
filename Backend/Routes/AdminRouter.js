import express from "express";
import { AdminGET } from "../Controllers/AdminControllers/AdminGET.js";
import { AdminLOGIN } from "../Controllers/AdminControllers/AdminLogin.js";
import { AdminPOST } from "../Controllers/AdminControllers/AdminPOST.js";
import { AdminProfileAuth } from "../Controllers/AdminControllers/AdminProfileAuth.js";

export const AdminRouter = express.Router();

AdminRouter.get("/", AdminGET);
AdminRouter.post("/", AdminPOST());
AdminRouter.post("/login", AdminLOGIN());
AdminRouter.get("/profile", AdminProfileAuth);
