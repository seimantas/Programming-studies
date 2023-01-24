const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

require("dotenv").config();

const PORT = +process.env.PORT;
const URI = process.env.URI;
const client = new MongoClient(URI);

const app = express();

app.use(express.json());
app.use(cors());

app.get("/orders", async (_, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db("OrdersDatabase")
      .collection("orders")
      .find()
      .toArray();
    await con.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.get("/order/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const con = await client.connect();
    const data = await con
      .db("OrdersDatabase")
      .collection("orders")
      .find({ _id: ObjectId(id) })
      .toArray();
    await con.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.post("/order", async (req, res) => {
  const { orderPlaced, coments, orderList, orderPrice, orderConfirmed } =
    req.body;

  try {
    const con = await client.connect();
    const dbRes = await con
      .db("OrdersDatabase")
      .collection("orders")
      .insertOne({
        orderPlaced: new Date(orderPlaced),
        coments,
        orderList,
        orderPrice,
        orderConfirmed,
      });

    await con.close();
    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.post("/orders", async (req, res) => {
  const { orderPlaced, coments, orderList, orderPrice, orderConfirmed } =
    req.body;

  try {
    const con = await client.connect();
    const dbRes = await con
      .db("OrdersDatabase")
      .collection("orders")
      .insertMany([
        {
          orderPlaced: new Date(orderPlaced),
          coments,
          orderList,
          orderPrice,
          orderConfirmed,
        },
        {
          orderPlaced: "2022-10-19T15:05:15.000+00:00",
          coments:
            "Ut faucibus, turpis vitae efficitur consequat, elit justo aliquam eros…",
          orderList: "[Washing machine, Dishwasher]",
          orderPrice: "3469$",
          orderConfirmed: "2022-10-19 17:05:15",
        },
      ]);

    await con.close();
    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.patch("/order/:id", async (req, res) => {
  const { id } = req.params;
  const { orderPlaced, coments, orderList, orderPrice, orderConfirmed } =
    req.body;

  try {
    const con = await client.connect();
    const db = con.db("OrdersDatabase");

    const user = await db.collection("orders").findOneAndUpdate(
      { _id: ObjectId(id) },
      {
        $set: { orderPlaced, coments, orderList, orderPrice, orderConfirmed },
      }
    );

    await con.close();

    res.send(user).end();
  } catch (error) {
    return res.send({ error }).end();
  }
});

app.patch("/orders/:id", async (req, res) => {
  const { orderPlaced, coments, orderList, orderPrice, orderConfirmed } =
    req.body;

  try {
    const con = await client.connect();
    const db = con.db("OrdersDatabase");

    const user = await db.collection("orders").updateMany(
      { _id: "637e4c731104b3c89816cff4", _id: "637e51661104b3c89816cff5" },
      {
        $set: { orderPlaced, coments, orderList, orderPrice, orderConfirmed },
      }
    );

    await con.close();

    res.send(user).end();
  } catch (error) {
    return res.send({ error }).end();
  }
});

app.delete("/order/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const con = await client.connect();
    const data = await con
      .db("OrdersDatabase")
      .collection("orders")
      .deleteOne({ _id: ObjectId(id) });
    await con.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.delete("/orders", async (_, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db("OrdersDatabase")
      .collection("orders")
      .deleteMany({
        _id: "637e823c79a2af5aa667f28c",
        _id: "637e4c731104b3c89816cff4",
      });
    await con.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} Server is running`);
});
