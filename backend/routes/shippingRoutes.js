import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { saveShippingController, getShippingController } from '../controllers/shippingController.js';


const router = express.Router();

router.post('/save-address', protect, saveShippingController);
router.get('/get-address/:userId', protect, getShippingController);

export default router;