
require("dotenv").config();
const mongoose = require("mongoose");
const connected = async () => {
    try {
        // console.log(process.env.database_URI)
        // console.log(typeof(process.env.database_URI))
        await mongoose.connect(process.env.database_URI);
        console.log("Database connected successfully");
    } catch (error) {
        console.error(error);
    }
};

const isConnected = () => {
    return mongoose.connection.readyState === 1;
};

module.exports = {
    isConnected,
    connected
};
