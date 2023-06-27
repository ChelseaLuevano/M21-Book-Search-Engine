const { User, Book } = require('../models');
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
       user: async (parent, args) => {
        return await User.findById(args.id).populate('user');
      }
    },

    Mutation: {
            addUser: async(parent, {username, email, password}) => {
                return await User.create({ username, email, password })
            },
            login: async(parent, {email, password}) => {
                const userAccount = await User.findOne({email})

                if (!userAccount) {
                    throw new AutheniticationError('No user account with this username found!')
                }

                const correctPW = await userAccount.isCorrectPassword(password)

                if (!correctPw) {
                    throw new AuthenticationError('Incorrect password!');
                }

                const token = signToken(userAccount);
                return { token, userAccount}
              
            },
            saveBooks: async (parent, { userID, bookId }) =>{
                return await Book.findOneAndUpdate(
                    { _id: userID },
                    { 
                        $addToSet: { savedBooks: { bookId }}
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );    
            },
            deleteBooks: async(parent, { bookId }) => {
                return Book.findOneAndDelete({ bookId: bookId})
            }
        }
}
module.exports = resolvers 