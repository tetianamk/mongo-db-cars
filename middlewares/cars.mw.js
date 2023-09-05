const createHttpError= require('http-errors');

const { Car } = require('../models');

module.exports.findCar = async (req, res, next) => {
  try {
    const { params: {carId}} = req;

    const foundCar = await Car.findById(carId);
    
    if(!foundCar) {
      return next(createHttpError(404, 'Car not found'));
    }

    req.car = foundCar;

    next();
    
  } catch (error) {
    next(error);
  }
}