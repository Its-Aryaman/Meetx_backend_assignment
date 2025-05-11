import express from 'express';
import { listActivities, createActivity } from '../../controllers/v1/activitiesController.js';

const router = express.Router();

// List all activities
router.get('/', listActivities);

// Temporary endpoint to create an activity (for testing)
router.post('/', createActivity);

export default router;