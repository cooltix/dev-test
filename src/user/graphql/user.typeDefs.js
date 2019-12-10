import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
  }

  input CreateUserInput {
    name: String!
  }

  type CreateUserPayload {
    user: User!
  }

  extend type Query {
    user(id: ID!): User
  }

  extend type Mutation {
    createUser(input: CreateUserInput!): CreateUserPayload!
  }
`;

export default typeDefs;
