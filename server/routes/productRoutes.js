import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
} from "../controllers/productController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";
import checkObjectId from "../middleware/checkObjectId.js";

router.route("/").get(getProducts).post(protect, isAdmin, createProduct);
router.route("/:id/reviews").post(protect, checkObjectId, createProductReview);
router.get("/top", getTopProducts);
router
  .route("/:id")
  .get(checkObjectId, getProductById)
  .put(protect, isAdmin, checkObjectId, updateProduct)
  .delete(protect, isAdmin, checkObjectId, deleteProduct);

export default router;
