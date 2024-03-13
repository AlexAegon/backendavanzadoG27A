import Book from "../models/Book.js";
import Author from "../models/Author.js";

const createBook = async(req , res) =>{
    try{
    /**
     * req.body {
     * authors []
     * book 
     * }
     */
let authorsData = req.body.authors;
const bookData = req.body.book;



if(!authorsData ||  !bookData){
    res.status(400).json({
        msg:'authorsData or bookData missing',
    });

}

if(!Array.isArray(authorsData)){
    res.status(400).json({
        msg: 'authorsData must be an array'
    });
}
/**
 * 1.- Crear Autores
 * 2.- Crear Libros
 */
// Crear autores , como convertir un arreglo de objetos  a un arreglo de Schemas , Objeto -> Schema 

authorsData = authorsData.map(
    
    (author)=>{
        return new Author(author);

    
});

// Crear libro con autores arriba 

const newBook = await Book.create({
    genre: bookData.genre,
    isbn: bookData.isbn,
    title: bookData.title,
    year: bookData.year,
    authors: authorsData,

});

res.json(newBook);
} catch(error){
    res.status(500).json({
        msg:'author books missing',
        error,
    });
}

};

export {createBook};