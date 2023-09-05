const carRouter = require('express').Router();
const carController = require('../controllers/cars.controller');
const { findCar } = require('../middlewares/cars.mw');
const reviewRouter = require('./reviewRouter');

carRouter.route('/').post(carController.createCar).get(carController.getCars);

carRouter.route('/:carId')
.get(carController.getCar)
.put(carController.updateCar)
.delete(carController.deleteCar);

carRouter.use('/:carId/reviews', findCar, reviewRouter);

module.exports = carRouter;