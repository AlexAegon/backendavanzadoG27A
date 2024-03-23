import Book from "../models/Book.js";
import Author from "../models/Author.js";

const createBook = async(req,res) =>{

    try {
        /**
         * 1.- Regsitrar Authors en la DB
         * 2.- Registrar Book con esos authors
         */

const {authors,book}=req.body;  


//const authors = req.body.authors;
//const books =req.body.books  es lo mismo que const {authors,books}=req.body;  --> aqui esta descontructurado.

// Vaslidacion que exista un arreglo  en este caso es authors 
if(!Array.isArray(authors) || !book){
    return res.status(400).json({
        msg:'Body Incorrecto'
    });
}


/** authors.map((value)=>{  // .map no puede ser async  2 opciones propia promesa  o For of 
return await Author.create(value)
})*/

// [Objets] -> [Promesas]   Convertir de un arreglo de Objetos a un arreglo de Modelos 

const authorPromises = authors.map((elem) =>{
    return Author.create(elem);
});

const authorModels = await Promise.all(authorPromises);

//[Models] -> [ids] transformar un arreglo de models es decir cuando ya esta registrado en la BD a ubn arreglo de Ids

const authorIds =authorModels.map((model) =>{
    return model.id;
});
book.authors = authorIds

const newBook =await Book.create(book);

return res.json(newBook);
        
    } catch (error) {
        res.status(500).json({
            msg:'Error al Crear Book',
            error,
        });
        
    }

}



// const createBook = async (req, res) => {

//     try {
//         /**
//  * req.body{
//  * authors[]
//  * book
//  * }
//  */

//         /**
//          * 1.- Crear Autores 
//          * 2.- Crear libro 
//          */

//         let authorsData = req.body.authors;
//         const bookData = req.body.book;



//         if (!authorsData || !bookData) {
//             res.status(400).json({
//                 msg: 'authorsData or bookData missing'
//             });
//         }

//         if (!Array.isArray(authorsData)) {
//             res.status(400).json({
//                 msg: 'authorsData must be an array'
//             });
//         }

//         // Crear Autores 
//         // como convertir un arreglo de Objetos [Objetos] -> [Schemas]

//         authorsData = authorsData.map((author) => {
//             return new Author(author)

//         });

//         // objeto -> Schema



//         const author = new Author({
//             lastName: 'de la luz',
//             mail: 'alex@mail.com',
//             name: 'Alex'
//         })



//         // Crear Libro con Autores de Arriba

//         const newBook = await Book.create({
//             genre: bookData.genre,
//             isbn: bookData.isbn,
//             title: bookData.title,
//             year: bookData.year,
//             authors: authorsData,
//         });

//         res.json(newBook);

//     } catch (error) {
//         res.status(500).json({
//             msg: 'Error al crear Book',
//             error,
//         });

//     }

// };




const getBookById = async (req, res) => {

    try {
        // Buscar Un Libro por Id
        const book = await Book.findById(req.params.bookId).populate('authors');


        if (!book) {
            return res.status(404).json({
                msg: 'Libro no encontrado'
            });
        }
        //Responder ese Libro
        return res.json(book);

    } catch (error) {
        return res.status(500).json({
            msg: 'Error al Buscar Libro por Id',
            error,
        });

    }

};

const getAllBooks =  async ( req, res) =>{

    try {
        const books = await Book.find();
        if(!books){
           return res.status(404).json({
            msg:'Libros no encontrados'
           });
        }
        return res.json(books);
        
    } catch (error) {
        res.ststus(500).json({
            msg: 'Error al Buscar Todos los libros',
            error,
        });
        
    }

};


export { createBook, getBookById,getAllBooks}; 