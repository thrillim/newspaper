import express from "express";
import ttsRoute from "./api/routes/TTSRoute";
import cors from "cors";

import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./api/routes/AuthRoute";
import cmtRoute from "./api/routes/CmtRoute";
import newsRoute from "./api/routes/NewsRoute";
import bookmarkRoute from "./api/routes/BookmarkRoute";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

console.log(PORT);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//1. kết nối mongodb cloud và lưu
mongoose.connect(process.env.MONGO_URL);
console.log("Database connected!");

// routing
app.get("/", (req, res) => {
    res.json({ success: true, message: "Welcome to express" }).status(200);
});

app.use("/tts", ttsRoute);
app.use("/auth", authRoute);
app.use("/comment", cmtRoute);
app.use("/news", newsRoute);
app.use("/bookmark", bookmarkRoute);


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});