require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const db = await mongoose.connect(process.env.DATA_BASE_URL);
        if (db.STATES.connected) {
            console.log(`Data base connection Established: ${db.STATES}`);
        }
    } catch (error) {
        throw new Error(`Error connecting to: ${error.message}`);
    }
}

module.exports = connectDB;
