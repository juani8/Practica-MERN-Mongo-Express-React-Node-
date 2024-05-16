const mongoose = require("mongoose");
require('dotenv').config();

const { mongodb_cs_host, mongodb_cs_database } = process.env;
const mongodb_cs = `mongodb://${mongodb_cs_host}/${mongodb_cs_database}`;

mongoose.set('strictQuery', false);

module.exports = async() => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    try {
        await mongoose.connect(mongodb_cs, connectionParams)
        console.log(`MongoDB '${mongodb_cs}' connected!`)
    } catch (err) {
        console.log(`Could not connect to DB ${err}`)
    };
};

