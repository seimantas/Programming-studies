import { Router } from "express";
import { MYSQL_CONFIG } from "../config.js";
import mysql from "mysql2/promise";
import joi from "joi";

const group = Router();

group.post("/", async (req, res) => {
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

group.get("/", async (_, res) => {
  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const groups = await con.execute(
      "SELECT * FROM `bills-managing-DB`.groups_table"
    );
    await con.end();

    return res.send(groups[0]).end;
  } catch (err) {
    return res.status(500).send(err).end();
  }
});

export default group;
