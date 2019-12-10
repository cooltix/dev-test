import userService from '../user.service';

const resolvers = {
  Query: {
    user: (_, { id }) => userService.getUser(id)
  },

  Mutation: {
    createUser: async (_, { input }) => {
      const newUser = userService.createUser(input);
      return {
        user: newUser
      };
    }
  }
};

export default resolvers;
