import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { generatePaymentToken } from '../controllers/paymentController.js';



const router = express.Router();

router.get('/braintree/getToken/:userId', protect, generatePaymentToken );

export default router;