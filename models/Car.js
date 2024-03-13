import mongoose from "mongoose";

/** 1.-Crear un Schema ( esqueleto)
 * 2.- Crear modelo , asignado un Nombre
 */

const carSchema = new mongoose.Schema({
    // campo -> Tipo de Dato
    plate : {
        type:String,
        require:true
    },
    model: String,
    brand : String,
    version: String,
    color: String,
    carType : String,
    vin: String,
    isdelete:{
        type:Boolean,
        default: false,
    },
});

//Nota importante: La primera letra en Mayuscula y en singular para el nombre del modelo 

export default mongoose.model('Car' , carSchema);