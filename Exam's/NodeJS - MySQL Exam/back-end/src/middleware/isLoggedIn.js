import jwt from "jsonwebtoken";
import { jwtSecret } from "../config.js";

export const isLoggedIn = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    jwt.verify(token, jwtSecret);
    next();
  } catch (error) {
    res.status(401).send({ err: "User not verified!" });
  }
};
