import express from 'express';
import {createBook } from '../controllers/bookController.js';


const bookRoutes = express.Router();
//  Create Book 
bookRoutes.post('/', createBook);

// Get Book  by Id 

//bookRoutes.get('/:bookId', getBookById)
// get all books 

//bookRoutes.get('/', getAllBooks)


export default bookRoutes;
