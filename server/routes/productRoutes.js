import express from "express";
import {
  getProduct,
  getProductById,
  createProduct,
} from "../controllers/productController.js";
const router = express.Router();
import { protect, isAdmin } from "../middleware/authMiddleware.js";

router.route("/").get(getProduct).post(protect, isAdmin, createProduct);
router.route("/:id").get(getProductById);

export default router;
