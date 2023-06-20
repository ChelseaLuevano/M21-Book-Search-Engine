const express = require('express');
// commented out this code as it isn't needed with GraphQL
// const path = require('path');
const db = require('./config/connection');
// commented out this code as it isn't needed with GraphQL
// const routes = require('./routes');
// Imported ApolloServer 
const { ApolloServer } = require('apollo-server-express')

// Imported the two parts of a GraphQL schema
const { typeDefs, resolvers } = require('./schemas')
const app = express();
const PORT = process.env.PORT || 3001;
// Added new server variable 
const server = new ApolloServer({
  typeDefs,
  resolvers
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets -  commented out this code as it isn't needed with GraphQL

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Create a new instance of an Apollo Server with the GraphQL Schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start()
  server.applyMiddleware({ app })

  // commented out this code as it isn't needed with GraphQL
  // app.use(routes);

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`🌍 Now listening on localhost:${PORT}`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  });
}
