import express from 'express';
const router = express.Router();
import { errorHandling } from '../controllers/errorHandlingController.js';

router.route('/errorHandling').get(errorHandling)
export default router;