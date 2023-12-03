import { Router } from "express";
import { getAllComments, searchComment, createComment, updateComment, deleteComment, likeComment, dislikeComment } from "../controllers/CmtController";
// import { checkToken } from "../middlewares/authMiddleware";

const cmtRoute = Router();

cmtRoute.get("/", getAllComments);
cmtRoute.get("/search/", searchComment);
cmtRoute.post("/", createComment);
cmtRoute.put("/", updateComment);
cmtRoute.delete("/", deleteComment);

cmtRoute.post("/like/", likeComment);
cmtRoute.post("/dislike/", dislikeComment);



export default cmtRoute;