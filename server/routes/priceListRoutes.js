import express from "express";
import { requireAuth } from "../middleware/authMiddleware.js";
import { getPriceList } from "../controllers/priceListController.js";

const priceListRouter = express.Router();

priceListRouter.get("/", requireAuth, getPriceList);

export default priceListRouter;
