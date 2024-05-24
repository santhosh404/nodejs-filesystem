import express from 'express';
import { createFile, getFiles } from '../controllers/fileSystemControllers.js';

//Initialize the router
const fileSystemRoutes = express.Router();

//Creating the routes
fileSystemRoutes.post('/file', createFile);
fileSystemRoutes.get('/file', getFiles);

export {fileSystemRoutes};