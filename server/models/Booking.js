const { Schema } = require('mongoose');


const bookingSchema = new Schema(
    {
        bookingId: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
        //should we add userID and carID in here, so we could check?
    });

module.exports = bookingSchema;