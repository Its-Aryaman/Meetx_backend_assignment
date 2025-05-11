import express from 'express';
import auth from '../../middleware/auth.js';
import { bookActivity, getMyBookings } from '../../controllers/v1/bookingsController.js';

const router = express.Router();

router.post('/', auth, bookActivity);
router.get('/', auth, getMyBookings);

export default router;