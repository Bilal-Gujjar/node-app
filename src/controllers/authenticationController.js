// Assuming User model and necessary imports are defined
import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const signup = async (req, res) => {
    try {
        const { name, email, password, age } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: 'User already exists' });
        }
        const user = new User({
          name,
          email,
          password,
          age
        });

        const newUser = await user.save();
        res.status(201).json({
          _id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          age: newUser.age,
          token: generateToken(newUser._id) 
        });
    
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select('+password'); 
        if (!user) {
          return res.status(401).send('Invalid email or password');
        }

        const isMatch = await user.matchPassword(password); 

        if (!isMatch) {
          return res.status(401).send('Invalid email or password');
        }

        const token = generateToken(user._id);

        res.json({
          _id: user._id,
          token: token
        });
    
      } catch (error) {
        res.status(500).send(error.message);
      }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  signup,
  login,
  getAllUsers
};
