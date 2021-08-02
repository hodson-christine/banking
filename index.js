const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userModel = require("./models/user.js");
const mongoConnect = require("./util/database");
let userRouter = require("./routes/user");

const app = express();
app.use(cors());
app.use(express.json());

app.use(userRouter);

const port =
	process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 4000;
const server = app.listen(port, function () {
	console.log("Server listening on port " + port);
});

mongoose.connect(
	(process.env.MONGODB_URI =
		"mongodb+srv://christine:Kbug@223@cluster0.v0hb6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" ||
		"mongodb+srv://christine:Kbug@223@cluster0.v0hb6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"),
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);
mongoose.connection.on("connected", () => {
	console.log("moongoose is connected");
});
