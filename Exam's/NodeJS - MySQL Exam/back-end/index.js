import express from "express";
import { LOCAL_PORT } from "./src/config.js";
import { isLoggedIn } from "./src/middleware/is-loggedIn.js";
import account from "./src/modules/account.js";
import createNewGroup from "./src/modules/create-new-group.js";
import loginUser from "./src/modules/login-user.js";
import userRegister from "./src/modules/register-new-user.js";
import renderGroups from "./src/modules/render-groups.js";

const app = express();

app.use(express.json());

app.use("/register", userRegister);
app.use("/login", loginUser);
app.use("/group", isLoggedIn, createNewGroup);
app.use("/groups", renderGroups);
app.use("/account", account);

app.listen(LOCAL_PORT, () =>
  console.log(`Server is running on: ${LOCAL_PORT}`)
);
