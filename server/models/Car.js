const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const carSchema = new Schema({
  carId: {
    type: String,
    required: true,
  },
  model: [
    {
      type: String,
    },
  ],
  description: {
    type: String, //passengers:
    type: String, //lugages:
    type: String, //doors:
    type: String, //Tranmission: 
    required: true,
  },
  image: {
    type: String,
  },

  // link: {      //this should be available???
  //   type: String,
  // },
  
  // title: {
  //   type: String,
  //   required: true,
  // },

});

module.exports = CarSchema;