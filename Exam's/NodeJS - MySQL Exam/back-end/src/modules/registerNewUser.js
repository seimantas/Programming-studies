import { Router } from "express";
import { MYSQL_CONFIG } from "../config.js";
import mysql from "mysql2/promise";
import joi from "joi";
import bcrypt from "bcryptjs";

const userRegister = Router();

userRegister.post("/", async (req, res) => {
  const { full_name, password, email } = req.body;

  const userSchema = joi.object({
    full_name: joi.string().required(),
    password: joi.string().required(),
    email: joi.string().required(),
  });

  const newUserData = { full_name, password, email };

  const validationResult = await userSchema.validate(newUserData);
  if (validationResult.error) throw Error(validationResult.error);

  const regTimestamp = new Date().toISOString();

  const hashedPassword = bcrypt.hashSync(password);

  if (!full_name || !email || !password) {
    return res.status(400).send({ error: error.massage }).end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    await con.execute(
      `INSERT INTO users (full_name, password, email, reg_timestamp) VALUES (${mysql.escape(
        full_name
      )}, '${hashedPassword}', ${mysql.escape(email)}, '${regTimestamp}')`
    );
    await con.end();

    return res.status(201).send(`User ${full_name} successfully created`).end();
  } catch (err) {
    return res.status(500).send(err).end();
  }
});

export default userRegister;
