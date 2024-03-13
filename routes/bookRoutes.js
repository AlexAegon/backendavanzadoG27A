import express from 'express';
import {createBook} from '../controllers/bookController.js';

const bookRoutes = express.Router();
// TODO: Create Book 
bookRoutes.post('/', createBook);

// Get Book  by Id 


// get


export default bookRoutes;
