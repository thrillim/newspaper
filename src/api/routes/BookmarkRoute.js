import { Router } from "express";
import { getAllBookmarks, searchBookmark, createBookmark, updateBookmark, deleteBookmark } from "../controllers/BookmarkController";
// import { checkToken } from "../middlewares/authMiddleware";

const bookmarkRoute = Router();

bookmarkRoute.get("/", getAllBookmarks);
bookmarkRoute.get("/search/", searchBookmark);
bookmarkRoute.post("/", createBookmark);
bookmarkRoute.put("/", updateBookmark);
bookmarkRoute.delete("/", deleteBookmark);




export default bookmarkRoute;