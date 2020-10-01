const { GraphQLList } = require("graphql");

const UserType = require("../../../modules/user/UserType");
const UserModel = require("../../../modules/user/UserModel");

module.exports = {
  type: new GraphQLList(UserType),
  resolve: async (_, __, context) => {
    // if (!context.user) return null;

    console.log(await UserModel.find({}))

    return await UserModel.find({});
    // return await PostModel.find({}).populate("user");
  }
};
