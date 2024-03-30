require('dotenv').config();
const express = require('express');
const connectDB = require('./src/connections/connectDB');
const routes = require('./src/routes');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => { 
    res.sendFile(__dirname + '/index.html');
})

routes.forEach(route => {
    app.use('/api', route)
});

const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        })
    } catch (error) {
        console.log(error.message)
    }
}

start();
