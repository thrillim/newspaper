import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";



// Định nghĩa schema cho user
const userSchema = new mongoose.Schema({
  username: String,     // tên đăng nhập
  password: String, 
  name: String,         // tên người dùng
  age: Number,
  avatar: String,       // lưu link ảnh
  bookmarks: [String], // để lưu article_id bài báo đã lưu

});

// Tạo model từ schema
const User = mongoose.model("User", userSchema);

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      console.log(`User not found for username: ${req.body.username}`);
      return res.status(404).json({ err: 'User not found' });
    }

    const checkPassword = await bcrypt.compare(req.body.password, user.password);
    if (!checkPassword) {
      return res.status(400).json({ err: 'Incorrect password' });
    }

    // Generate and send a JWT token
    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '7d' });
    return res.status(200).json({ username: user.username, token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ err: 'Internal server error' });
  }
};

export const register = async (req, res) => {
  try {
    if (!req.body.username || !req.body.password) {
      return res.status(400).json({ err: 'Missing userusername or password' });
    }

    const existingUser = await User.findOne({ username: req.body.username });

    if (existingUser) {
      return res.status(400).json({ err: 'Username already exists' });
    }

    const hashPass = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({ 
      username: req.body.username, 
      password: hashPass,
      name: "NoName",
      age: 0,
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIGFwNXyPYyinjA6jMFN3qOl4lvrAukvlA5g&usqp=CAU",
      bookmarks: []
    });
    await newUser.save();

    jwt.sign({ username: req.body.username }, process.env.JWT_SECRET, { expiresIn: "7d" }, (err, token) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ err: "Internal server error" });
      }
      const responseData = {
        username: req.body.username,
        token: token,
      };
      return res.status(200).json(responseData);
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ err: 'Internal server error' });
  }
};

export const getUser = async (req, res) => {
  const { username } = req.body; // Giả sử bạn truyền username qua body

  try {
    // Tìm người dùng theo username trong cơ sở dữ liệu
    const user = await User.findOne({ username });

    // Kiểm tra xem người dùng có tồn tại hay không
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Trả về thông tin người dùng
    return res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};