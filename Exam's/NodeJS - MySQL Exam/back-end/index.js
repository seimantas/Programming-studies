import express from "express";
import cors from "cors";
import { LOCAL_PORT } from "./src/config.js";
import { isLoggedIn } from "./src/middleware/is-loggedIn.js";
import account from "./src/modules/account.js";
import bills from "./src/modules/bills.js";
import group from "./src/modules/group.js";
import login from "./src/modules/login.js";
import register from "./src/modules/register.js";
import allGroups from "./src/modules/getAllGroups.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/register", register);
app.use("/login", login);
app.use("/group", isLoggedIn, group);
app.use("/groups", allGroups);
app.use("/account", isLoggedIn, account);
app.use("/bills", isLoggedIn, bills);

app.listen(LOCAL_PORT, () =>
  console.log(`Server is running on: ${LOCAL_PORT}`)
);
