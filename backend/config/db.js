const mongoose = require('mongoose');
const {DB_URI} = require('./index');

module.exports.DBconnect = () => {
    return mongoose.connect(DB_URI)
        .then(() => {console.log("Database connected")})
        .catch((err) => {console.log(err)})
};