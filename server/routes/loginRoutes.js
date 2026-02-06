import express from "express";
import { userLogin, userMe } from "../controllers/loginController.js";
import { requireAuth } from "../middleware/authMiddleware.js";

const loginRouter = express.Router();

loginRouter.post("/", userLogin);
loginRouter.get("/me", requireAuth, userMe);

export default loginRouter;
