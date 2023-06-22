const { User, Book } = require('../models');

const resolvers = {
    Query: {
       savedBooks: async () =>{
        return await Book.find({}).populate('savedBooks')
       }
    }

    // Mutation: {
    //     addUser: async()
    // }
};

module.exports = resolvers 