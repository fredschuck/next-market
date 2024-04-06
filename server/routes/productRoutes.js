import express from "express";
import {
  getProduct,
  getProductById,
  createProduct,
  updateProduct,
} from "../controllers/productController.js";
const router = express.Router();
import { protect, isAdmin } from "../middleware/authMiddleware.js";

router.route("/").get(getProduct).post(protect, isAdmin, createProduct);
router.route("/:id").get(getProductById).put(protect, isAdmin, updateProduct);

export default router;
