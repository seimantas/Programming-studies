import { Router } from "express";
import { MYSQL_CONFIG } from "../config.js";
import mysql from "mysql2/promise";
import joi from "joi";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const loginUser = Router();

loginUser.post("/", async (req, res) => {
  const { password, email } = req.body;

  const userSchema = joi.object({
    password: joi.string().required(),
    email: joi.string().required(),
  });

  const loginUserData = { password, email };

  console.log(loginUserData);

  const validationResult = userSchema.validate(loginUserData);
  if (validationResult.error) throw Error(validationResult.error);

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const [data] = await con.execute(
      `SELECT * FROM users WHERE email=${mysql.escape(email)}`
    );
    await con.end();

    console.log(mysql.escape(email));

    if (con.length === 0) {
      return res
        .status(400)
        .send({ err: "Incorrect email or password provided" })
        .end();
    }

    const isUserAuthed = bcrypt.compareSync(password, data[0].password);

    if (isUserAuthed) {
      return res.send("ok");
    }

    return res
      .status(400)
      .send({ err: "Incorrect email or password provided" })
      .end();
  } catch (err) {
    return res.status(500).send(err).end();
  }
});

export default loginUser;
