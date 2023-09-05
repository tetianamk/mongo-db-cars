const mongoose = require('mongoose');
const CONSTANTS = require('../constants');
const Car = require('./car');
const Review = require('./review');


async function connectDB() {
  await mongoose.connect(CONSTANTS.DB_URL);
}

connectDB().catch(err => console.log(err));

module.exports = {
  Car,
  Review
};