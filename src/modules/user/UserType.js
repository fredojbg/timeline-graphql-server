const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require("graphql");

module.exports = new GraphQLObjectType({
  name: "user",
  description: "User data",
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) }
  })
});
