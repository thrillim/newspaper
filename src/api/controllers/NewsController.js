import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  article_id: String,
  title: String,
  link: String,
  keywords: [String],
  creator: String,
  video_url: String,
  description: String,
  pubDate: Date,
  image_url: String,
  source_id: String,
  source_priority: Number,
  country: [String],
  category: [String],
  language: String,
  comments: [
    {
      user_id: String,
      content: String,
    },
  ],
});

const News = mongoose.model("News", newsSchema);

export const getAllNews = async (req, res) => {
  try {
    const newsList = await News.find();
    res.json(newsList).status(200);
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
  const requestBody = req.body;

  if (!requestBody.title || !requestBody.content) {
    return res.json({ message: "Title and Content are required" }).status(400);
  }

  const newNews = new News({
    ...requestBody,
  });

  try {
    await newNews.save();
    res.json({ newNews }).status(201);
  } catch (error) {
    res.json({ message: error.message }).status(500);
  }
};


export const updateNews = async (req, res) => {
  const { article_id, ...updateData } = req.body;

  if (!article_id) return res.json({ message: "article_id is required in the request body" }).status(400);

  try {
    const updatedNews = await News.findOneAndUpdate(
      { article_id },
      updateData,
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
