import { MYSQL_CONFIG } from "../config.js";
import mysql from "mysql2/promise";
import joi from "joi";
import bcrypt from "bcryptjs";

const userSchema = joi.oject({
  full_name: joi.string().required(),
  password: joi.string().required(),
  email: joi.string().required(),
});

export const registerNewUseService = async (req, res) => {
  const { full_name, password, email } = req.body;

  const newUserData = { full_name, password, email };

  const validationResult = userSchema.validate(newUserData);

  if (validationResult.error) throw Error(validationResult.error);

  const regTimestamp = new Date().toISOString();

  if (!full_name || !email || !password) {
    return res.status(400).send(error).end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    await con.execute(
      `INSERT INTO users (full_name, password, email, reg_timestamp) VALUES ('${full_name}', '${password} '${email}', '${regTimestamp}')`
    );
    await con.end();

    return res.status(201).send("User successfully created").end();
  } catch (err) {
    return res.status(500).send(err).end();
  }
};
