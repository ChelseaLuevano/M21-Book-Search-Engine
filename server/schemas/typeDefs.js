const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
        _id: ID!
        username: String
        email: String
        password: String
        savedBooks: [Book]
    }

    type Book {
        authors: [String]
        description: String
        bookId: ID
        image: String
        link: String
        title: String
    }

    type Authorization {
        token: ID
        // This user is referencing the User Type above
        user: User
    }

    // this is where we put all Book model's required inputs
    input BookInput {
        authors: [String]
        description: String
        image: String
        link: String
        title: String
        bookId: ID
    }

    type Query {
        // Get Single User that is logged in
        me: User
    }

    type Mutation {
        // Add/Create User
        addUser(username: String!, email: String!, password: String!): Authorization
        login(username: String!, email: String!, password: String!): Authorization
        savedBooks(bookData: BookInput!): User
        deleteBook(bookId: ID!): User
    }


`;

module.exports = typeDefs;