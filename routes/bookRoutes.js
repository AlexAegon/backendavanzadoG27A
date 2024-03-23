import express from 'express';
import {createBook, getBookById ,getAllBooks} from '../controllers/bookController.js';


const bookRoutes = express.Router();
//  Create Book 
bookRoutes.post('/', createBook);

// Get Book  by Id forma embebido

bookRoutes.get('/:bookId',getBookById);


// get all books   forma embebido

bookRoutes.get('/',getAllBooks)

export default bookRoutes;
