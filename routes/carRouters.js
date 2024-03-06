import express from 'express';
import {createCar} from '../controllers/carController.js';

const CarRoutes = express.Router();

CarRoutes.post ('/cars',createCar);

export default CarRoutes;
