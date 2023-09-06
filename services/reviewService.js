const { Review }= require('../models');


module.exports.createReview = async ({car, body}) => {

  const newReview = await Review.create({
    ...body,
    car: car._id
  });

  await reviewData.car.updateOne({ $push: { reviews: newReview._id }});

  return newReview;
}

module.exports.findReviews = async (filter, select, populate) =>{

  const reviews = await Review.find(filter, select).populate(populate || '');

  return reviews;
}