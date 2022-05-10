const { AuthenticationError } = require('apollo-server-exrepss');
const { User, Car } = require('../models');
const { signToken } = requrie('../utils/auth');


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
    addUser: async (parent, args) = {  // why this is wrong here????
      const user = await User.create({ ...args}),
      const token = signToken(user),
      return { token, user },

    },
    bookedCar: async (parent, { input }, context) => {
      if (context.user) {
        return await User.findOneAndUpdate({ _id: context.user._id },
          { _id:context.user._id },
          { $pull: { bookedCar: {bookedId } } },
          { new: true});
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
