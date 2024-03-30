require("dotenv").config();
const express = require("express");
const routes = require("./src/routes");
const connectDB = require("./src/connections/connectDB");
const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

routes.forEach((route) => {
	app.use("/api", route);
});

const start = async () => {
	try {
		await connectDB();
		app.listen(PORT, () => {
			console.log(`listening on http://localhost:${PORT}`);
		});
	} catch (error) {
		console.log(error.message);
	}
};

start();

// Disconnect from MongoDB when the application exits
process.on('SIGINT', () => {
  mongoose.disconnect(() => {
    console.log('Disconnected from MongoDB');
    process.exit(0);
  });
});