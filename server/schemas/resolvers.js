const { AuthenticationError } = require('apollo-server-express');
const { User, Car } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers ={
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({_id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const tokem = signToken(user);

      return {token, user};
    },
    signUp: async (parent, args) => {  
      const user = await User.create({ ...args});
      const token = signToken(user);
      return { token, user };

    },
    createBooking: async (parent, { input }, context) => {
      if (context.user) {
        return await User.findOneAndUpdate({ _id: context.user._id },
          { _id:context.user._id },
          { $pull: { booking: {bookingId } } },
          { new: true});
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
