import mongoose from "mongoose";

// Định nghĩa Schema
const bookmarkSchema = new mongoose.Schema({
  id: String,
  title: String,
  content: String
});

// Tạo model từ schema
const Bookmark = mongoose.model("Bookmark", bookmarkSchema);

export const getAllBookmarks = async (req, res) => {
  try {
    const bookmarks = await Bookmark.find();
    res.json(bookmarks).status(200);
  } catch (error) {
    res.json({ message: error.message }).status(500);
  }
};

export const searchBookmark = async (req, res) => {
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
    
    const result = await Bookmark.find(query);

    res.json({ result }).status(200);
  } catch (error) {
    res.json({ message: error.message }).status(500);
  }
};

export const createBookmark = async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) return res.json({ message: "Title and Content are required" }).status(400);

  const newBookmark = new Bookmark({
    title,
    content,
  });

  try {
    await newBookmark.save();
    res.json({ newBookmark }).status(201);
  } catch (error) {
    res.json({ message: error.message }).status(500);
  }
};

export const updateBookmark = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  if (!id) return res.json({ message: "ID is required" }).status(400);

  try {
    const updatedBookmark = await Bookmark.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );

    if (!updatedBookmark) return res.json({ message: "Bookmark not found" }).status(404);

    res.json({ updatedBookmark }).status(200);
  } catch (error) {
    res.json({ message: error.message }).status(500);
  }
};

export const deleteBookmark = async (req, res) => {
  const { id } = req.params;

  if (!id) return res.json({ message: "ID is required" }).status(400);

  try {
    const deletedBookmark = await Bookmark.findByIdAndDelete(id);

    if (!deletedBookmark) return res.json({ message: "Bookmark not found" }).status(404);

    res.json({ deletedBookmark }).status(200);
  } catch (error) {
    res.json({ message: error.message }).status(500);
  }
};
