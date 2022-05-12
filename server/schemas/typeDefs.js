const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID
    userName: String!
    Email: String!
    bookedCar: [Car] 
  }

  type Car {
    id: ID
    commentText: String!
    createdAt: String!
  }

  type Booking {
    id: ID
    
  }

  type Query {
    me: User
    listCar: [Car]
  }


  type Mutation {
    login( email: String!, password: String!): User
    signUp(username: String!, email: String!, passowrd: String!): User
    createBooking(carID: ID, userID: ID): Booking
    
  }
`;

module.exports = typeDefs;
