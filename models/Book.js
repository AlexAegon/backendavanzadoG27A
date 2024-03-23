import mongoose from 'mongoose';
//import { authorSchema } from './Author.js';

/**
 * 1.- Crear el schema
 * 2.- Darle nombre
 */

const bookSchema = new mongoose.Schema({
  title: String,
  year: Number,
  genre: String,
  isbn: String,
  // authors: [authorSchema], aqui como un arreglo de Schemas importanto el esquema de autores desde Author.js
  authors: [{
type: mongoose.Schema.Types.ObjectId,
ref: 'Author'
  }],// aca como un arreglo de Referencias
});

export default mongoose.model('Book', bookSchema);