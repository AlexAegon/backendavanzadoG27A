import Book from "../models/Book.js";
import Author from "../models/Author.js";


const createBook = async (req, res) => {

    try {
        /**
 * req.body{
 * authors[]
 * book
 * }
 */

        /**
         * 1.- Crear Autores 
         * 2.- Crear libro 
         */

        let authorsData = req.body.authors;
        const bookData = req.body.book;



        if (!authorsData || !bookData) {
            res.status(400).json({
                msg: 'authorsData or bookData missing'
            });
        }

        if (!Array.isArray(authorsData)) {
            res.status(400).json({
                msg: 'authorsData must be an array'
            });
        }

        // Crear Autores 
        // como convertir un arreglo de Objetos [Objetos] -> [Schemas]

        authorsData = authorsData.map((author) => {
            return new Author(author)

        });

        // objeto -> Schema



        const author = new Author({
            lastName: 'de la luz',
            mail: 'alex@mail.com',
            name: 'Alex'
        })



        // Crear Libro con Autores de Arriba

        const newBook = await Book.create({
            genre: bookData.genre,
            isbn: bookData.isbn,
            title: bookData.title,
            year: bookData.year,
            authors: authorsData,
        });

        res.json(newBook);

    } catch (error) {
        res.status(500).json({
            msg: 'Error al crear Book',
            error,
        });

    }

};
export { createBook };