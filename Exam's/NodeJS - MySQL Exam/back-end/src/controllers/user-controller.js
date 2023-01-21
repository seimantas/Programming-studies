import { Router } from "express";
import { registerNewUseService } from "../services/newUserUploadService.js";

const userController = Router();

userController.post("/", async (body) => {
  await registerNewUseService({ body });

  console.log(body);
});

export default userController;
