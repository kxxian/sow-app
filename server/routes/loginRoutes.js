import express from "express";
import {
  getLang,
  setLang,
  userLogin,
  userMe,
} from "../controllers/loginController.js";
import { requireAuth } from "../middleware/authMiddleware.js";

const loginRouter = express.Router();

loginRouter.post("/", userLogin);
loginRouter.get("/lang", getLang);
loginRouter.post("/lang", setLang);
loginRouter.get("/me", requireAuth, userMe);

export default loginRouter;
