const { Car } = require('../models');


module.exports.createCar = async (req, res, next) => {
  try {

    const { body } = req;

    const car = await Car.create(body);
 
    res.status(201).send({ data: car});
    
  } catch (error) {
    next(error);
  }

}

module.exports.getCars = async (req, res, next) => {
  try {
    
    const cars = await Car.find();

    res.send({ data: cars});

  } catch (error) {
    next(error);
  }
}

module.exports.getCar = async (req, res, next) => {
  try {
    
    const { params: {carId} } = req;

    const car = await Car.findById(carId);

    res.send({data: car});

  } catch (error) {
    next(error);
  }
}

module.exports.updateCar = async (req, res, next) => {
  try {
    const { params: {carId}, body} = req;

    const updateCar = await Car.findByIdAndUpdate(carId, body, {new: true});

    res.send({data: updateCar});
  } catch (error) {
    next(error);
  }
}

module.exports.deleteCar = async (req, res, next) => {
  try {
    const { params: {carId} } = req;

    const deleteCar = await Car.findByIdAndDelete(carId);

    res.send({data: deleteCar});
  } catch (error) {
    next(error);
  }
}