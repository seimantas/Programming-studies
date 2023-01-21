import { MYSQL_CONFIG } from "../config.js";
import mysql from "mysql2/promise";

export const registerNewUseService = async (req, res) => {
  const { full_name, email } = req.body;

  const date = new Date();
  const regTimestamp = date.toISOString();

  if (!full_name || !email) {
    return res.status(400).send(error).end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    await con.execute(
      `INSERT INTO users (full_name, email, reg_timestamp) VALUES ('${full_name}', '${email}', '${regTimestamp}')`
    );
    await con.end();

    return res.status(201).send("User successfully created").end();
  } catch (err) {
    return res.status(500).send(err).end();
  }
};
