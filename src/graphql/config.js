require("dotenv").config();

const ENV = process.env;

const jwtSecret = ENV.JWT_KEY || "jwt_secret";
const graphqlPort = ENV.PORT || 9000;

const mLabUser = ENV.MLAB_USER;
const mLabPass = ENV.MLAB_PASSWORD;

const dbUrl = `mongodb://${mLabUser}:${mLabPass}@ds041198.mlab.com:41198/timeline-graphql`;



//https://www.mongodb.com/atlas-signup-from-mlab?utm_source=mlab.com&utm_medium=referral&utm_campaign=mlab%20signup&utm_content=blue%20sign%20up%20button
module.exports = { jwtSecret, graphqlPort, dbUrl };
