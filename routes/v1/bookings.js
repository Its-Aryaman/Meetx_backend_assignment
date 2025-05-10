import express from 'express';
import auth from '../../middleware/auth.js';
import { bookActivity, getMyBookings } from '../../controllers/v1/bookingsController.js';

const router = express.Router();

// Book an activity
router.post('/', auth, bookActivity);

// Get all bookings for the authenticated user
router.get('/', auth, getMyBookings);

export default router;