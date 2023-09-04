const carRouter = require('express').Router();

const carController = require('../controllers/cars.controller');

carRouter.route('/')
.post(carController.createCar)
.get(carController.getCars);

carRouter.route('/:carId')
.get(carController.getCar)
.put(carController.updateCar)
.delete(carController.deleteCar);

module.exports = carRouter;