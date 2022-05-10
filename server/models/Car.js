const { Schema } = require('mongoose');


const carSchema = new Schema({
  carId: {
    type: String,
    required: true,
  },
  model: {
      type: String,
    },

  description: {
    type: String, //passengers:
    type: String, //lugages:
    type: String, //doors:
    type: String, //Tranmission: 
    required: true,
  },

  price: {
    type: String,
    required: true,
  },

  image: {
    type: String,
  },

});

module.exports = CarSchema;