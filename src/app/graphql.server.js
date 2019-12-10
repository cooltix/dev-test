import { ApolloServer, gql } from 'apollo-server-express';
import { Router } from 'express';
import merge from 'lodash.merge';
import { userTypeDefs, userResolvers } from 'user/graphql';

const rootTypeDefs = gql`
  type Query
  type Mutation
`;

const rootResolvers = {
  Query: {},
  Mutation: {}
};

const typeDefs = [rootTypeDefs, userTypeDefs];
const resolvers = merge(rootResolvers, userResolvers);

const graphQLServer = new ApolloServer({
  typeDefs,
  resolvers
});

export const graphQLRouter = Router();
graphQLRouter.use(graphQLServer.getMiddleware({ path: '/' }));

export default graphQLServer;
