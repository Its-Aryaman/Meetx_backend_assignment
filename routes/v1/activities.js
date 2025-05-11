import express from 'express';
import { listActivities, createActivity } from '../../controllers/v1/activitiesController.js';

const router = express.Router();

router.get('/', listActivities);
router.post('/', createActivity);

export default router;