const createHttpError = require('http-errors');
const ReviewService = require('../services/reviewService');
const { Review, Car} = require('../models');

module.exports.createReview = async (req, res, next) =>{
  try {
    const {car, body} =req;

    const review = await ReviewService.createReview({
      ...body,
      car
    });

    res.status(201).send({ data: review});

  } catch (error) {
    next(error);
  }
};

module.exports.getAllReviews = async (req, res, next) =>{
  try {

   const reviews = await ReviewService.findReviews();

   res.send({data: reviews});
    
  } catch (error) {
    next(error);
  }
}

module.exports.getCarReviews = async (req, res, next) =>{
  try {
    const { car } = req;

    const carReview = await ReviewService.findReviews({
      car: car._id
    }, '-__v', {
      path: 'car',
      select: 'name yearOfVehicle isInsurance'
    });

    res.send({ data: carReview});

  } catch (error) {
    next(error);
  }
}

module.exports.getReview = async (req, res, next) =>{
  try {
    const { params: { reviewId }, car: {_id: carId} } = req;

    const review = await Review.findOne({
      _id: reviewId,
      car: carId
    });

    if(!review) {
      return(next(createHttpError(404, 'Review not found')));
    }
    
    res.send({ data: review});

  } catch (error) {
    next(error);
  }
}


module.exports.updateReview = async (req, res, next) =>{
  try {
    const { car: {_id: carId }, params: { reviewId }, body } = req;

    const updateReview = await Review.findOneAndUpdate({
      _id: reviewId,
      car: carId
    }, body, {new: true});

    if(!updateReview) {
      return(next(createHttpError(404, 'Review not found')));
    }

    res.send({ data: updateReview});
    
  } catch (error) {
    next(error);
  }
}

module.exports.deleteReview = async (req, res, next) =>{
  try {
    const { car: {_id: carId }, params: { reviewId } } = req;

    const review = await Review.findOneAndDelete({
      _id: reviewId,
      car: carId
    });

    if(!review) {
      return(next(createHttpError(404, 'Review not found')));
    }

    res.send({ data: review});

  } catch (error) {
    next(error);
  }
}