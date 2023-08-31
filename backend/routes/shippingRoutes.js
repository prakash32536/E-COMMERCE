import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { shippingController } from '../controllers/shippingController.js';


const router = express.Router();

router.post('/address', protect, shippingController);

export default router;