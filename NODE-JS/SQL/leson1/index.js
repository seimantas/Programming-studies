const express = require("express");
const mysql = require("mysql2/promise");
require("dotenv").config();
const app = express();

app.use(express.json());

const LOCAL_PORT = +process.env.LOCAL_PORT;

const MYSQL_CONFIG = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  port: process.env.port,
  database: process.env.database,
};

app.get("/item/:id", async (req, res) => {
  const id = +req.params.id.trim();

  if (id < 0 || Number.isNaN(id) || typeof id !== "number") {
    return res
      .status(400)
      .send({
        error: `Please provide a proper id in the URL: current id ${id} incorrect.`,
      })
      .end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    const result = await con.execute(`SELECT * FROM items WHERE id=${id}`);

    await con.end();

    console.log(result);

    res.send(result[0]).end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
});

app.post("/table", async (req, res) => {
  const name = req.body?.name.trim();

  if (!name) {
    return res.status(400).send(`Incorrect table name provided: ${name}`).end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    const res = await con.execute(
      `CREATE table ${name}(id int NOT NULL AUTO_INCREMENT, itemName varchar(35), PRIMARY KEY (id))`
    );

    await con.end();

    console.log(res);
    res.status(201).send("Table successfully created").end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
});

app.delete("/item/:id", async (req, res) => {
  const id = +req.params.id.trim();

  if (id < 0 || Number.isNaN(id) || typeof id !== "number") {
    return res
      .status(400)
      .send({
        error: `Please provide a proper id in the URL: current id ${id} incorrect.`,
      })
      .end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    await con.execute(`DELETE * FROM items WHERE id=${id}`);

    await con.end();

    res.status(202).send("Item successfully dropped").end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
});

app.post("/item", async (req, res) => {
  const itemName = req.body?.itemName?.trim();

  if (typeof itemName !== "string" || !itemName) {
    return res
      .status(400)
      .send(`Incorrect itemName provided: ${itemName}`)
      .end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    await con.execute(`INSERT INTO items (itemName) VALUES ('${itemName}')`);
    await con.end();

    res.status(201).send("User successfully created").end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
});

app.listen(LOCAL_PORT, () => {
  console.log(`Listening on ${LOCAL_PORT}`);
});
