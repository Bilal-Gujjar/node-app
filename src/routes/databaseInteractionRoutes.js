import express from 'express';
import {  
  createNote,
  getAllNotes,
  getNoteById,
  updateNoteById,
  deleteNoteById 
} from '../controllers/databaseInteractionController.js';
import verifyToken from '../middleware/authmiddleware.js';

const router = express.Router();
router.use('/notes', verifyToken);

router.route('/notes')
  .post(createNote)   
  .get(getAllNotes); 

router.route('/notes/:id')
  .get(getNoteById)    
  .put(updateNoteById)  
  .delete(deleteNoteById); 

export default router;
