const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
        username: String,
        email: String,
        password: String,
        savedBooks: [Book]
    }

    type Book {
        _id: ID
        authors: String,
        description: String
        image: String,
        link: String,
        title: String
    }

    type Query {
        savedBooks: [Book]
        users: [User]
        // do I want this parameter of username here?
        user(username: String!): User
    }

    // type Mutation {
    //     addUser:(username: String, email: String, password: String): User
    // }
`;

module.exports = typeDefs;