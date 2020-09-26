require("dotenv").config();

const ENV = process.env;

const jwtSecret = ENV.JWT_KEY || "jwt_secret";
const graphqlPort = ENV.PORT || 9000;

const mLabUser = ENV.MLAB_USER;
const mLabPass = ENV.MLAB_PASSWORD;

const dbUrl = `mongodb+srv://alfredo:alfredojose1022@timelinecluster.d2aga.mongodb.net/timeline?retryWrites=true&w=majority`;




module.exports = { jwtSecret, graphqlPort, dbUrl };
