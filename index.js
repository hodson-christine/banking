const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
	res.json("Welcome to the application");
});

const port =
	process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 4000;
const server = app.listen(port, function () {
		console.log("Server listening on port " + port)
	})
// app.listen(3000);