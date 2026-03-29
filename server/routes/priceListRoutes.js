import express from "express";
import { requireAuth } from "../middleware/authMiddleware.js";
import {
  getOnePriceList,
  getPriceList,
  updatePriceList,
} from "../controllers/priceListController.js";

const priceListRouter = express.Router();

priceListRouter.get("/", requireAuth, getPriceList);
priceListRouter.get("/:id", requireAuth, getOnePriceList);
priceListRouter.put("/", requireAuth, updatePriceList);

export default priceListRouter;
