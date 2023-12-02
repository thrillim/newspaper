import { Router } from "express";
import { textToSpeech } from "../controllers/TTSController";
// import { checkToken } from "../middlewares/authMiddleware";

const ttsRoute = Router();

ttsRoute.post("/", textToSpeech);

export default ttsRoute;