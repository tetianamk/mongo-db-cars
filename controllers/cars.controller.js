const createHttpErrors = require('http-errors');

module.exports.createCar = async (req, res, next) => {
  try {

    const { body } = req;

    res.status(201).send({ data: body});
    
  } catch (error) {
    next(error);
  }

}

module.exports.getCars = async (req, res, next) => {
  try {
    
    res.send({ data: []});

  } catch (error) {
    next(error);
  }
}

module.exports.getCar = async (req, res, next) => {
  try {
    
    const { params: {carId} } = req;

    res.send({data: {id: carId}});

  } catch (error) {
    next(error);
  }
}

module.exports.updateCar = async (req, res, next) => {
  try {
    const { params: {carId} } = req;

    res.send({data: {id: carId}});
  } catch (error) {
    next(error);
  }
}

module.exports.deleteCar = async (req, res, next) => {
  try {
    const { params: {carId} } = req;

    res.send({data: {id: carId}});
  } catch (error) {
    next(error);
  }
}