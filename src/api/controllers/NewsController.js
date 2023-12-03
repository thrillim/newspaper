import mongoose from "mongoose";

// Định nghĩa Schema
const newsSchema = new mongoose.Schema({
  id: String,
  title: String,
  content: String
});

// Tạo model từ schema
const News = mongoose.model("News", newsSchema);

export const getAllNews = async (req, res) => {
  try {
    const newss = await News.find();
    res.json(newss).status(200);
  } catch (error) {
    res.json({ message: error.message }).status(500);
  }
};

export const searchNews = async (req, res) => {
  const queryParams = req.query;

  try {
    if (Object.keys(queryParams).length === 0) {
      return res.status(400).json({ message: "At least one query parameter is required." });
    }

    // Tạo đối tượng query dựa trên query parameters
    const query = {};
    for (const key in queryParams) {
      query[`${key}`] = { $regex: new RegExp(queryParams[key], "i") };
    }
    
    const result = await News.find(query);

    res.json({ result }).status(200);
  } catch (error) {
    res.json({ message: error.message }).status(500);
  }
};

export const createNews = async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) return res.json({ message: "Title and Content are required" }).status(400);

  const newNews = new News({
    title,
    content,
  });

  try {
    await newNews.save();
    res.json({ newNews }).status(201);
  } catch (error) {
    res.json({ message: error.message }).status(500);
  }
};

export const updateNews = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  if (!id) return res.json({ message: "ID is required" }).status(400);

  try {
    const updatedNews = await News.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );

    if (!updatedNews) return res.json({ message: "News not found" }).status(404);

    res.json({ updatedNews }).status(200);
  } catch (error) {
    res.json({ message: error.message }).status(500);
  }
};

export const deleteNews = async (req, res) => {
  const { id } = req.params;

  if (!id) return res.json({ message: "ID is required" }).status(400);

  try {
    const deletedNews = await News.findByIdAndDelete(id);

    if (!deletedNews) return res.json({ message: "News not found" }).status(404);

    res.json({ deletedNews }).status(200);
  } catch (error) {
    res.json({ message: error.message }).status(500);
  }
};
