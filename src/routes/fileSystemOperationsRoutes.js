import express from 'express';
const router = express.Router();
import { fileSystemOperations } from '../controllers/fileSystemOperationsController.js';


router.route('/listFiles').get(fileSystemOperations)
export default router;