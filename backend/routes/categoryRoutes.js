import express from 'express';
import { categoryController, getCategory, updateCategoryById } from '../controllers/categoryController.js';
import { protect } from '../middleware/authMiddleware.js';


const router = express.Router();

router.post('/create-category', protect, categoryController);
router.get('/all-category', getCategory);
router.put("/:categoryId/:userId",protect, updateCategoryById);

export default router;