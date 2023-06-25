const { User, Book } = require('../models');

const resolvers = {
    Query: {
       savedBooks: async () =>{
        return await Book.find({}).populate('savedBooks').populate({
            path: 'savedBooks',
            populate: 'user'
       })
    },
       user: async (parent, args) => {
        // Use the parameter to find the matching class in the collection
        return await Book.findById(args.username).populate('username');
      },
    
     },

    Mutation: {
            addUser: async(parent, {username, email, password}) => {
            return await User.create({ username, email, password })
            }
        }
}
module.exports = resolvers 