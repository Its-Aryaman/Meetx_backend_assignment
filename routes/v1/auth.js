import express from 'express';
import { register, login } from '../../controllers/v1/authController.js';

const router = express.Router();

// Register User
router.post('/register', register);

// Login User
router.post('/login', login);

export default router;