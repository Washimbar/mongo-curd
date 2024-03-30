require("dotenv").config();
const express = require("express");
const connectDB = require("./src/connection/connectDB");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}`);
        })
    } catch (error) {
        console.log(error.message);
    }
}

start();