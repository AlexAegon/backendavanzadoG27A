import Car from '../models/Car.js';

// Create

// Funcion de Flecha Carece de Contexto 
const createCar = async(req,res) =>{

    /** brand: 'Nissan',
        carType: 'sedan',
        color: 'red',
        model: 'Tsuru',
        plate: '123-ABC',
        vin: '8684686sdga3',
        version: 'GSR 2000',*/
        
   const newCar =  await Car.create(req.body);
   res.json(newCar);

};
//READ 

//UPDATE

//DELETE

export {createCar};