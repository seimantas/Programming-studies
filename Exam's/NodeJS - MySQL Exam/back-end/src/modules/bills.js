import { Router } from "express";
import { MYSQL_CONFIG } from "../config.js";
import mysql from "mysql2/promise";
import joi from "joi";

const bills = Router();

bills.get("/:group_id", async (req, res) => {
  const group_id = +req.params.group_id;

  const userSchema = joi.object({
    group_id: joi.number().required(),
  });

  const billsData = { group_id };

  const validationResult = await userSchema.validate(billsData);
  if (validationResult.error) throw Error(validationResult.error);

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const groups = await con.execute(
      `SELECT * FROM bills WHERE group_id =${group_id}`
    );
    await con.end();

    return res.send(groups[0]).end;
  } catch (err) {
    return res.status(500).send(err).end();
  }
});

bills.post("/", async (req, res) => {
  const { group_id, amount, description } = req.body;

  const userSchema = joi.object({
    group_id: joi.number().required(),
    amount: joi.number().required(),
    description: joi.string().required(),
  });

  const billsData = { group_id, amount, description };

  const validationResult = await userSchema.validate(billsData);
  if (validationResult.error) throw Error(validationResult.error);

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    await con.execute(
      `INSERT INTO bills (group_id, amount, description) VALUES (${mysql.escape(
        group_id
      )}, ${mysql.escape(amount)}, ${mysql.escape(description)})`
    );
    await con.end();

    return res.status(201).send(`Bill successfully created.`).end();
  } catch (err) {
    return res.status(500).send(err).end();
  }
});

export default bills;
