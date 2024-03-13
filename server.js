//1.-Importar Express
//2.- Crear app con express
// 3.- Usar app.listen para abrir puertos
import {connect} from './config.js';
import express from  'express';
import carRoutes from './routes/carRouters.js';
import bookRoutes from './routes/bookRoutes.js';

connect();
const api = express();

api.use(express.json());

api.listen(8000 , () =>{
    console.log('API corriendo en Puerto 8000');
});

// String Nombre de la Ruta 
api.get('/test', (req , res) =>{
    res.send ('Hola esto es una Prueba');
    
});

api.use( carRoutes);
api.use('/books', bookRoutes);