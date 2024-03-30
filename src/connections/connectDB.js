require("dotenv").config();
const mongoose = require("mongoose")

const connectDB = async () => {
	try {
		const dataBase = await mongoose.connect(process.env.DATA_BASE_URL);
		if (dataBase.STATES.connected) {
			console.log(`Data base connection established`);
		}
	} catch (error) {
		throw new Error(error.message);
	}
};

module.exports = connectDB;