import { Router } from "express";
import { MYSQL_CONFIG } from "../config.js";
import mysql from "mysql2/promise";
import joi from "joi";

const createNewGroup = Router();

createNewGroup.post("/", async (req, res) => {
  const { name } = req.body;

  const groupSchema = joi.object({
    name: joi.string().required(),
  });

  const newUserData = { name };

  const validationResult = await groupSchema.validate(newUserData);
  if (validationResult.error) throw Error(validationResult.error);

  if (!name) {
    return res.status(400).send({ error: error.massage }).end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    await con.execute(
      `INSERT INTO groups_table (name) VALUES (${mysql.escape(name)})`
    );
    await con.end();

    return res.status(201).send(`Group ${name} successfully created.`).end();
  } catch (err) {
    return res.status(500).send(err).end();
  }
});

export default createNewGroup;
