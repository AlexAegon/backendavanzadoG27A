import mongoose from "mongoose";

//1.- Schema 
// 2.-Ponerle Nombre 

const authorSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    mail: String,
});

export {authorSchema};
export default mongoose.model('Author',authorSchema);