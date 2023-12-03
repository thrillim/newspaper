import mongoose from "mongoose";

// Định nghĩa Schema
const commentSchema = new mongoose.Schema({
  id: String,
  name: String,
  like: {
    type: Number, // Kiểu dữ liệu số nguyên
    default: 0,   // Giá trị mặc định là 0
  },
  dislike: {
    type: Number,
    default: 0,
  },
  content: {
    type: String, // Kiểu dữ liệu chuỗi
    required: true, // Bắt buộc phải có giá trị
  },
});
// Tạo model từ schema
const Comment = mongoose.model("Comment", commentSchema);

export const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments).status(200);
  } catch (error) {
    res.json({ message: error.message }).status(500);
  }
};

export const searchComment = async (req, res) => {
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
    
    const result = await Comment.find(query);

    res.json({ result }).status(200);
  } catch (error) {
    res.json({ message: error.message }).status(500);
  }
};

export const createComment = async (req, res) => {
  const { name, like, dislike, content } = req.body;

  if (!name || !content) return res.json({ message: "Name and Content are required" }).status(400);

  const newComment = new Comment({
    name,
    like: like || 0,
    dislike: dislike || 0,
    content,
  });

  try {
    await newComment.save();
    res.json({ newComment }).status(201);
  } catch (error) {
    res.json({ message: error.message }).status(500);
  }
};

export const updateComment = async (req, res) => {
  const { id } = req.params;
  const { name, like, dislike, content } = req.body;

  if (!id) return res.json({ message: "ID is required" }).status(400);

  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      id,
      { name, like, dislike, content },
      { new: true }
    );

    if (!updatedComment) return res.json({ message: "Comment not found" }).status(404);

    res.json({ updatedComment }).status(200);
  } catch (error) {
    res.json({ message: error.message }).status(500);
  }
};

export const deleteComment = async (req, res) => {
  const { id } = req.params;

  if (!id) return res.json({ message: "ID is required" }).status(400);

  try {
    const deletedComment = await Comment.findByIdAndDelete(id);

    if (!deletedComment) return res.json({ message: "Comment not found" }).status(404);

    res.json({ deletedComment }).status(200);
  } catch (error) {
    res.json({ message: error.message }).status(500);
  }
};




export const likeComment = async (req, res) => {
  const { id } = req.params;

  if (!id) return res.json({ message: "ID is required" }).status(400);

  try {
    const commented = await Comment.findById(id);

    if (!commented) return res.json({ message: "Comment not found" }).status(404);

    commented.like += 1;

    await commented.save();

    res.json({ commented }).status(200);
  } catch (error) {
    res.json({ message: error.message }).status(500);
  }
};

export const dislikeComment = async (req, res) => {
  const { id } = req.params;

  if (!id) return res.json({ message: "ID is required" }).status(400);

  try {
    const commented = await Comment.findById(id);

    if (!commented) return res.json({ message: "Comment not found" }).status(404);

    commented.dislike += 1;

    await commented.save();

    res.json({ commented }).status(200);
  } catch (error) {
    res.json({ message: error.message }).status(500);
  }
};