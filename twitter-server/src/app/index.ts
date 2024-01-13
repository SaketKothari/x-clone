import express from 'express';
import bodyParser from 'body-parser';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServer } from '@apollo/server';

export async function initializeServer() {
  const app = express();
  app.use(bodyParser.json());

  const graphqlServer = new ApolloServer({
    typeDefs: `type Query {sayHello: String}`,
    resolvers: {
      Query: {
        sayHello: () => `Hey from GraphQl Server`,
      },
    },
  });

  await graphqlServer.start();

  app.use('/graphql', expressMiddleware(graphqlServer));

  return app;
}
