import jwt from "jsonwebtoken";

export const checkToken = (req, res, next) => {
  const header = req.headers["authorization"];
//   console.log(header)
  if (!header) {
    return res.status(401).json({ error: "Authorization header is missing" });
  }

//   const token = header.split(".")[1];
  const token = header

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error(err);
      return res.status(401).json({ error: "Invalid token" });
    }

    console.log("Token decoded successfully", decoded);
    next();
  });
};
