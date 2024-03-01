//1.-Importar Express
//2.- Crear app con express
// 3.- Usar app.listen para abrir puertos

import express from  'express';
const api = express();
api.listen(8000 , () =>{
    console.log('API corriendo en Puerto 8000');
});

