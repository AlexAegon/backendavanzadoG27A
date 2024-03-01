import mongoose from "mongoose";
import dotenv from 'dotenv'; //para leer las variables de entorno 
dotenv.config();

const connect= () =>{
    mongoose.connect(process.env.DB_URI);
}

export{connect};

