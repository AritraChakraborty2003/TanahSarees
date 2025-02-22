import express from "express";
import { OAuthLogin } from "../Controllers/AuthController/OAuthLogin.js";
import { Signup } from "../Controllers/AuthController/Signup.js";
import { Login } from "../Controllers/AuthController/Login.js";
import { ProfileAuth } from "../Controllers/AuthController/ProfileAuth.js";
import { Logout } from "../Controllers/AuthController/Logout.js";

export const AuthRouter = express.Router();

AuthRouter.post("/google", OAuthLogin());
AuthRouter.post("/signup", Signup());
AuthRouter.post("/login", Login());
AuthRouter.get("/profile", ProfileAuth);
AuthRouter.post("/logout", Logout());
