import express from "express";
import { LOCAL_PORT } from "./src/config.js";
import userController from "./src/controllers/user-controller.js";

const app = express();

app.use(express.json());

app.use("/user", userController);

app.listen(LOCAL_PORT, () =>
  console.log(`Server is running on: ${LOCAL_PORT}`)
);
