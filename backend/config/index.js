require('dotenv').config();

module.exports = {
    DB_URI : process.env.MongoURI,
    Port : process.env.Port
};