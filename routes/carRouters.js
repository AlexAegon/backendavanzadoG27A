import express from 'express';
import {createCar ,deleteCar,getAllCars ,getCarById,updateCar} from '../controllers/carController.js';
import Car from '../models/Car.js';

const CarRoutes = express.Router();



CarRoutes.post('/cars/',createCar);
CarRoutes.get('/cars' , getAllCars);
CarRoutes.get('/cars/:carId', getCarById);
CarRoutes.put('/cars/:carId', updateCar);
CarRoutes.delete('/cars/:carId' ,deleteCar);

export default CarRoutes;
