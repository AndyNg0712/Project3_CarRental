const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    userName: String!
    Email: String!
    bookedCar: [Car]
    
  }

  type Car {
    CarId: ID
    commentText: String!
    createdAt: String!
  }

  type Query {
    me: User
  }


  type Mutation {
    login( email: String!, password: String!): Auth
    addUser(username: String!, email: String!, passowrd: String!): Auth
    bookedCar (input: CarData! ): User
    removeBook (carId: ID!): User
  }
`;

module.exports = typeDefs;
