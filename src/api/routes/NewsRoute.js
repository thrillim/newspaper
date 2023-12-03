import { Router } from "express";
import { getAllNews, searchNews, createNews, updateNews, deleteNews } from "../controllers/NewsController";
// import { checkToken } from "../middlewares/authMiddleware";

const newsRoute = Router();

newsRoute.get("/", getAllNews);
newsRoute.get("/search/", searchNews);
newsRoute.post("/", createNews);
newsRoute.put("/", updateNews);
newsRoute.delete("/", deleteNews);




export default newsRoute;