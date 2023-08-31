// this file is to handel user routs in backend 
import express from 'express';
import {registerUser,loginUser, getAllUsers} from '../controllers/userController.js'
import {protect} from "../middleware/authMiddleware.js"


const router = express.Router();

// register route 
router.route('/register').post(registerUser);

router.route('/login').post(loginUser);
router.get(`/getAllUsers`, protect, getAllUsers);
export default router;


