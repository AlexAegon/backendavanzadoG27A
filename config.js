import mongoose from "mongoose";
import dotenv from 'dotenv'; //para leer las variables de entorno 
dotenv.config();

const connect= () =>{
    mongoose.connect(process.env.DB_URI);
    const connection = mongoose.connection;

    connection.once('open', () =>{
        console.log('conexion exitosa a Base de Datos');
    });
    connection.once('error', () =>{
        
    })
}

export{connect};

