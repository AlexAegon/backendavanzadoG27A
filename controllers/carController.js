import Car from '../models/Car.js';

// Create 

// Funcion de Flecha Carece de Contexto 
const createCar = async (req, res) => {

    /** brand: 'Nissan',
        carType: 'sedan',
        color: 'red',
        model: 'Tsuru',
        plate: '123-ABC',
        vin: '8684686sdga3',
        version: 'GSR 2000',*/

    const newCar = await Car.create(req.body);
    res.json(newCar);

};
//READ 
//Get all Cars 
const getAllCars = async (req, res) => {
    const cars = await Car.find({
        isdelete: false,
    });
    res.json(cars);
};

//Get car by id
const getCarById = async (req, res) => {
    const car = await Car.findById(req.params.carId);
    res.json(car);

};

//UPDATE

const updateCar = async (req, res) => {
    // Una forma de obtener el id por parametros : ambas maneras son lo mismo 
    //onst carId= req.params.carId; //== const {carId} = req.params;

    //descontruccion de Objetos 
    const { carId } = req.params;
    //1.- Filtro 2.- Nuevos Campos
    const updatedCar = await Car.updateOne(
        {
            _id: carId,
        },
        req.body);

    res.json(updatedCar);

    //const newCar = await Car.findByIdAndUpdate(req.params.carId,req.body)

};

//DELETE

const deleteCar = async (req, res) => {

    //const deletedCar = await Car.findByIdAndDelete(req.params.carId);
    //res.json(deletedCar);

    // Busque un Car por us id 
    // Cambie el campo isDeleted a True

    const deletedCar = await Car.findByIdAndUpdate(req.params.carId, {
        //Objeto Nuevo
        isdelete: true,
    },
        //opciones
        {
            new : true,
        }
    );
    res.json(deletedCar);
};

/** const deletedCar = await Car.findByIdAndUpdate(req.params.carId, {
     isDeleted: true,
 },
     {
         new: true,
     })*/


export { createCar, getAllCars, getCarById, updateCar, deleteCar };