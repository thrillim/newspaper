// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// const users = [
//     {
//         name: "Huan",
//         password: "123456",
//     },
//     {
//         name: "Doanh",
//         password: "987654",
//     },
//     {
//         name: "Duong",
//         password: "111111",
//     },
// ];

// export const login = async (req, res) => {
//     const user = users.find((u) => u.name === req.body.name);

//     if (!user) {
//         console.log(`User not found for name: ${req.body.name}`);
//         return res.status(404).json({ err: 'User not found' });
//     }

//     console.log(`Password: ${req.body.password}`);
//     console.log(`User Password: ${user.password}`);
//     const checkPassword = await bcrypt.compare(req.body.password, user.password);
//     console.log(checkPassword)
//     if (!checkPassword) {
//         return res.status(400).json({ err: 'Incorrect password' });
//     }

//     // Generate and send a JWT token
//     const token = jwt.sign({ name: user.name }, process.env.JWT_SECRET, { expiresIn: '7d' });
//     return res.status(200).json({ name: user.name, token });
// };

// // export const login = async (req, res) => {
// //     // giong register()
// //     const hashPassword = user[0].password;
// //     const checkPassword = await bcrypt.compare(req.body.password, hashPassword);
// //     if (!checkPassword) {
// //         return res.status(400).json({ err: "khong dang nhap duoc" });
// //     }
// //     // return res.status(200).json(user);
// // };

// export const register = async (req, res) => {
//     if (!req.body.name || !req.body.password) {
//         return res.status(400).json({ err: 'Missing username or password' });
//     }

//     const existingUser = users.find((u) => u.name === req.body.name);

//     if (existingUser) {
//         return res.status(400).json({ err: 'Username already exists' });
//     }

//     const hashPass = await bcrypt.hash(req.body.password, 10);
//     users.push({ name: req.body.name, password: hashPass });
//     jwt.sign({ name: req.body.name }, process.env.JWT_SECRET, { expiresIn: "7d" }, (err, token) => {
//         if (err) {
//             return res.status(500).json({ err: "Internal server error" });
//         }
//         const responseData = {
//             name: req.body.name,
//             token: token,
//         };
//         return res.status(200).json(responseData);
//     });
// };



import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";



// Định nghĩa schema cho user
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

// Tạo model từ schema
const User = mongoose.model("User", userSchema);

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      console.log(`User not found for email: ${req.body.email}`);
      return res.status(404).json({ err: 'User not found' });
    }

    const checkPassword = await bcrypt.compare(req.body.password, user.password);
    if (!checkPassword) {
      return res.status(400).json({ err: 'Incorrect password' });
    }

    // Generate and send a JWT token
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '7d' });
    return res.status(200).json({ email: user.email, token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ err: 'Internal server error' });
  }
};

export const register = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({ err: 'Missing useremail or password' });
    }

    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(400).json({ err: 'Useremail already exists' });
    }

    const hashPass = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({ email: req.body.email, password: hashPass });
    await newUser.save();

    jwt.sign({ email: req.body.email }, process.env.JWT_SECRET, { expiresIn: "7d" }, (err, token) => {
      if (err) {
        return res.status(500).json({ err: "Internal server error" });
      }
      const responseData = {
        email: req.body.email,
        token: token,
      };
      return res.status(200).json(responseData);
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ err: 'Internal server error' });
  }
};
