const mongoose = require('mongoose');
const CONSTANTS = require('../constants');



async function connectDB() {
  await mongoose.connect(CONSTANTS.DB_URL);
}

connectDB().catch(err => console.log(err));
