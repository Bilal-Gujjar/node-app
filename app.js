
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/dbConfig.js';
import authenticationRoutes from './src/routes/authenticationRoutes.js';
import databaseInteractionRoutes from './src/routes/databaseInteractionRoutes.js';
import fileSystemOperationsRoutes from './src/routes/fileSystemOperationsRoutes.js';
import errorHandlingRoutes from './src/routes/errorHandlingRoutes.js';
import asynchronousOperationsRoutes from './src/routes/asynchronousOperationsRoutes.js';

// import usersRoutes from '../src/routes/users.routes.js';


const app = express();
app.use(express.json())
//connectDB();
dotenv.config();

connectDB();

app.use(bodyParser.json());
app.use(cors());

app.use('/api', asynchronousOperationsRoutes);
app.use('/api', errorHandlingRoutes);
app.use('/api', fileSystemOperationsRoutes);
app.use('/api', databaseInteractionRoutes);
app.use('/api', authenticationRoutes);



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
