import express from 'express';
import {createCar ,deleteCar,getAllCars ,getCarById,updateCar} from '../controllers/carController.js';

import {authValidator } from '../middlewares/authvalidator.js';
import {isAdmin} from '../middlewares/isAdmin.js';

const CarRoutes = express.Router();



CarRoutes.post('/cars/',createCar);
CarRoutes.get('/cars' , authValidator  , isAdmin, getAllCars);
CarRoutes.get('/cars/:carId', getCarById);
CarRoutes.put('/cars/:carId', updateCar);
CarRoutes.delete('/cars/:carId' ,deleteCar);

export default CarRoutes;
