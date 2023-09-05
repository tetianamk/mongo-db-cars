const { Schema, model} = require('mongoose');

const carSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  yearOfVehicle: {
    type: String
  },
  brand: {
    type: String,
    required: true
  },
  color: {
    type: String
  },
  mileage: {
    type: Number,
    default: 0
  },
  isInsurance: {
    type: Boolean,
    required: true
  }
},
{
  timestamps: true
});

const Car = model('Car', carSchema);

module.exports = Car;