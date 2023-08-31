import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createProductController, getProducts, getProductById, updateProductById, getProductPhotoById } from "../controllers/productController.js";

const router = express.Router();

router.post("/create-product", protect, createProductController);
router.get("/get-all", getProducts)
router.get("/:productId", getProductById);
router.put("/:productId/:userId",protect, updateProductById);
router.get("/photo/:productId", getProductPhotoById);


export default router;