const reviewRouter = require('express').Router();
const reviewController = require('../controllers/reviews.controller');

reviewRouter.route('/').post(reviewController.createReview).get(reviewController.getCarReviews);

 reviewRouter.route('/:reviewId')
.get(reviewController.getReview)
.put(reviewController.updateReview)
.delete(reviewController.deleteReview);



module.exports = reviewRouter;