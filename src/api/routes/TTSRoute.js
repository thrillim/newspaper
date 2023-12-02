import { Router } from "express";
import { textToSpeech } from "../controllers/TTSController";
// import { checkToken } from "../middlewares/authMiddleware";

const tssRoute = Router();

tssRoute.get("/", textToSpeech);

export default tssRoute;