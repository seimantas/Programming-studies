import { Router } from "express";
import { registerNewUseService } from "../services/registerNewUseService";

const userController = Router();

userController.post("/", (req, res) => {
  const { full_name, password, email } = req.body;
  try {
    registerNewUseService({ full_name, password, email });

    return res.status(201).send(`User ${full_name} successfully created`).end();
  } catch (err) {
    return res.status(500).send(err).end();
  }
});

export default userController;
