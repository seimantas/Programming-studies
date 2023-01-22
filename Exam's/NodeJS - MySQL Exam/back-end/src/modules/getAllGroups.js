import { Router } from "express";
import { MYSQL_CONFIG } from "../config.js";
import mysql from "mysql2/promise";

const allGroups = Router();

allGroups.get("/", async (_, res) => {
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

export default allGroups;
