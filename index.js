const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userModel = require("./models/user.js");
const mongoConnect = require('./util/database')

const app = express();
app.use(cors());

app.get("/", (req, res) => {
	res.json("Welcome to the application");
});


const userDummyData = {
	email: "samuel.azumah@gmail.com",
	password: "123456",
};

const savedUser = new userModel(userDummyData);
savedUser.save().then((savedUser) => {
	if (savedUser) {
		console.log(savedUser);
	} else {
		console.log("not saved");
	}
});

// mongoose.connect(
// 	"mongodb://localhost:27017/banking",
// 	{ useNewUrlParser: true, useUnifiedTopology: true },
// 	(error) => {
// 		const connectionStatus = !error
// 			? "Success"
// 			: "Error Connecting to database";
// 		console.log(connectionStatus);
// 	}
// );


const port =
	process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 4000;
const server = app.listen(port, function () {
	console.log("Server listening on port " + port);
});

mongoConnect(client => {
	console.log(client);
});
