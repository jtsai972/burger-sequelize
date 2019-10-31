require("dotenv").config({path: __dirname + "./../.env"});
module.exports = {
    host: process.env.DB_HOST,
    port: process.env.PORT || process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATA
};

