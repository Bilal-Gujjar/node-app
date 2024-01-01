import express from 'express';
const router = express.Router();
import { signup, login, getAllUsers } from '../controllers/authenticationController.js';


router.route('/users').get(getAllUsers);
router.route('/signup').post(signup);
router.route('/login').post(login);


export default router;