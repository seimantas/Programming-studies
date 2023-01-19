import express from "express";
import { LOCAL_PORT } from "./src/config.js";

const app = express();

app.use(express.json());

app.listen(LOCAL_PORT, () =>
  console.log(`Server is running on: ${LOCAL_PORT}`)
);
