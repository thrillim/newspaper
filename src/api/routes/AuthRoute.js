import { Router } from "express";
import { login, register, getUser } from "../controllers/AuthController";
import { checkToken } from "../middlewares/authMiddlewares"

const authRoute = new Router();

// /auth/login
authRoute.post("/login", login);

authRoute.post("/register", register);

authRoute.get("/getUser", checkToken, getUser);


export default authRoute;
