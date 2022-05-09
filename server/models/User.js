const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const dateFormat = require('../utils/auth');
const carSchema = require('./Car');


const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
  password: {
    type: String,
    required: true,
  },
  bookwsCar: [carSchema], //bookedCar ;[carSchema]
},
// set this to use virtual below
{
  toJSON: {
    virtuals: true,
  },
}
);

// hash user password
userSchema.pre('save', async function (next) {
if (this.isNew || this.isModified('password')) {
  const saltRounds = 10;
  this.password = await bcrypt.hash(this.password, saltRounds);
}

next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `bookCount` with the number of saved books we have
// In this case, we need to change 'bookCount' to 'carCount' to see how many car unbooked. 
userSchema.virtual('carCount').get(function () {  //this should be carCount
return this.bookedCar.length; //savebooks = bookedCar. 
});

const User = model('User', userSchema);

module.exports = User;


