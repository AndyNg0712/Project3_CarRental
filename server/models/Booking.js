const { Schema } = require('mongoose');


const bookingSchema = new Schema({
  bookingId: {
    type: String,
    required: true,
  },
  message: {
      type: String,
    },


});

module.exports = bookingSchema;