const createHttpError = require('http-errors');
const { Review, Car} = require('../models');

module.exports.createReview = async (req, res, next) =>{
  try {
    const {car, body} =req;

    const review = await Review.create({
      ...body,
      carId: car._id
    });

    res.status(201).send({ data: review});

  } catch (error) {
    next(error);
  }
};

module.exports.getAllReviews = async (req, res, next) =>{
  try {

   const reviews = await Review.find();

   res.send({data: reviews});
    
  } catch (error) {
    next(error);
  }
}

module.exports.getCarReviews = async (req, res, next) =>{
  try {
    const { car } = req;

    const carReview = await Review.find({
      carId: car._id
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
      carId
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
      carId
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
      carId
    });

    if(!review) {
      return(next(createHttpError(404, 'Review not found')));
    }

    res.send({ data: review});
    
  } catch (error) {
    next(error);
  }
}