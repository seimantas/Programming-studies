import { Router } from "express";
import { jwtSecret, MYSQL_CONFIG } from "../config.js";
import mysql from "mysql2/promise";
import joi from "joi";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const login = Router();

login.post("/", async (req, res) => {
  const { password, email } = req.body;

  const userSchema = joi.object({
    password: joi.string().required(),
    email: joi.string().required(),
  });

  const loginUserData = { password, email };

  const validationResult = userSchema.validate(loginUserData);
  if (validationResult.error) throw Error(validationResult.error);

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    const [data] = await con.execute(
      `SELECT * FROM users WHERE email=${mysql.escape(email)}`
    );
    await con.end();

    if (con.length === 0) {
      return res
        .status(400)
        .send({ err: "Incorrect email or password provided" })
        .end();
    }

    const isUserAuthed = bcrypt.compareSync(password, data[0].password);

    if (isUserAuthed) {
      const token = jwt.sign({ id: data[0].id }, jwtSecret);

      return res.send({ mesage: "Successfully logged in", token });
    }

    return res
      .status(400)
      .send({ err: "Incorrect email or password provided" })
      .end();
  } catch (err) {
    return res.status(500).send(err).end();
  }
});

export default login;
