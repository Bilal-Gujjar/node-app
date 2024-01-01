import express from 'express';
const router = express.Router();
import { asyncOperations } from '../controllers/asynchronousOperationsController.js';


router.route('/asynchronousOperations')
  .post(asyncOperations)

export default router;