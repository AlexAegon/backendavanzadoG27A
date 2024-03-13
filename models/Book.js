import mongoose from "mongoose";
import { authorSchema } from "./Author.js";

/**
 * 1.- Crear el Schema 
 * 2.- Darle Nombre 
 */
const bookSchema = new mongoose.Schema({
    title: String,
    year: Number,
    genre: String,
    isbn: String,
    authors: [{authorSchema}],
});

export default mongoose.model('Book', bookSchema);