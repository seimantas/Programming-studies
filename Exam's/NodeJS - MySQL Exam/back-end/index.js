import express from "express";
import { LOCAL_PORT } from "./src/config.js";
import { isLoggedIn } from "./src/middleware/isLoggedIn.js";
import createNewGroup from "./src/modules/createNewGroup.js";
import loginUser from "./src/modules/loginUser.js";
import userRegister from "./src/modules/registerNewUser.js";

const app = express();

app.use(express.json());

app.use("/register", userRegister);
app.use("/login", loginUser);
app.use("/group", isLoggedIn, createNewGroup);

app.listen(LOCAL_PORT, () =>
  console.log(`Server is running on: ${LOCAL_PORT}`)
);
