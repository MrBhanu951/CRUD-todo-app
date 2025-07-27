const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
    try {
        console.log(process.env.DB_CONNECTION_STRING);
        const connectDb = await mongoose.connect("mongodb+srv://root:123@cluster0.prg6q3n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log(`Database connected:${connectDb.connection.name}`);

    } catch (error) {
        console.error(error);

    }
};


module.exports = connectDb;