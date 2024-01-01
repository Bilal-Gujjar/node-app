import Note from '../models/notes.model.js';

const createNote = async (req, res) => {
  try {
    const noteData = req.body;
    const note = new Note(noteData);
    const savedNote = await note.save();
    
    res.status(201).json(savedNote);
  } catch (error) {
    console.error('Error creating note:', error);
    res.status(500).json({ message: error.message });
  }
};
const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    console.error('Error fetching all notes:', error);
    res.status(500).json({ message: error.message });
  }
};

const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.json(note);
  } catch (error) {
    console.error(`Error fetching note with id ${req.params.id}:`, error);
    res.status(500).json({ message: error.message });
  }
};


const updateNoteById = async (req, res) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.json(updatedNote);
  } catch (error) {
    console.error(`Error updating note with id ${req.params.id}:`, error);
    res.status(500).json({ message: error.message });
  }
};


const deleteNoteById = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.status(200).json({ message: `Note is deleted ` });
  } catch (error) {
    console.error(`Error deleting note with id ${req.params.id}:`, error);
    res.status(500).json({ message: error.message });
  }
};


export {
  createNote,
  getAllNotes,
  getNoteById,
  updateNoteById,
  deleteNoteById
};
