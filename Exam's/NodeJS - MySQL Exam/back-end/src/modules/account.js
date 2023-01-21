import { Router } from "express";
import { MYSQL_CONFIG } from "../config.js";
import mysql from "mysql2/promise";
import joi from "joi";

const account = Router();

account.post("/", async (req, res) => {
  const { group_id, user_id } = req.body;

  console.log(req.body);

  const accountSchema = joi.object({
    group_id: joi.number().required(),
    user_id: joi.number().required(),
  });

  const accoountData = { group_id, user_id };

  const validationResult = accountSchema.validate(accoountData);
  if (validationResult.error) throw Error(validationResult.error);

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const [data] = await con.execute(
      `INSERT INTO accounts (group_id, user_id) VALUES ('${group_id}', '${user_id}')`
    );
    await con.end();

    return res
      .status(201)
      .send({ mesage: "User succsefuly added to group." })
      .end();
  } catch (err) {
    return res.status(500).send(err).end();
  }
});

account.get("/", async (req, res) => {
  const { id } = req.body;

  const accountSchema = joi.object({
    id: joi.number().required(),
  });

  const accoountData = { id };

  const validationResult = accountSchema.validate(accoountData);
  if (validationResult.error) throw Error(validationResult.error);

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const data = await con.execute(
      `SELECT groups_table.name, groups_table.id FROM groups_table INNER JOIN accounts ON accounts.group_id = groups_table.id WHERE accounts.user_id =${id}`
    );

    await con.end();

    return res.status(200).send(data[0]).end();
  } catch (error) {
    return res.status(500).send(error).end();
  }
});

export default account;
