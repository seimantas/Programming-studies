const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

require("dotenv").config();

const PORT = +process.env.PORT;
const URI = process.env.URI;
const client = new MongoClient(URI);

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (_, res) => {
  const conection = await client.connect();
  const data = await conection
    .db("node-leson-for")
    .collection("users")
    .find()
    .toArray();
  await conection.close();
  return res.send(data);
});

app.listen(PORT, () => {
  console.log(`${PORT} Server is running`);
});
