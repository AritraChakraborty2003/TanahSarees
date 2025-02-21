import express from "express";
import { OAuthLogin } from "../Controllers/SignupController/OAuthLogin.js";

export const AuthRouter = express.Router();

AuthRouter.post("/google", OAuthLogin());
