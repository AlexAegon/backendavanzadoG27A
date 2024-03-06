import mongoose from "mongoose";

/** 1.-Crear un Schema ( esqueleto)
 * 2.- Crear modelo , asignado un Nombre
 */

const carSchema = new mongoose.Schema({
    // campo -> Tipo de Dato
    plate : String,
    model: String,
    brand : String,
    version: String,
    color: String,
    carType : String,
    vin: String,
});

//Nota: La primera letra en Mayuscula y en singular para el nombre 

export default mongoose.model('Car' , carSchema);