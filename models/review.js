const { Schema, model } = require('mongoose');

const reviewShema = new Schema({
  body: {
    type: String,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5
  },
  authorReview: {
    type: String,
    required: true
  },
  isRecommended: {
    type: Boolean
  },
  car: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Car'
  }
},{
  timestamps: true
});

const Review = model('Review', reviewShema);

module.exports = Review;