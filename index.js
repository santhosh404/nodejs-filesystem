import dotenv from 'dotenv';
import express from 'express';
import fs from 'fs';
import { fileSystemRoutes } from './routes/fileSystemRoutes.js';

//Initializing express app
const app = express()

// Load environment variables from .env file
dotenv.config();

//Json middleware
app.use(express.json())


//Creating the routes
app.use('/api/v1/', fileSystemRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server up and running at ${process.env.PORT}`)
})