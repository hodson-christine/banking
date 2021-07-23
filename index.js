const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
	res.send("hello world");
});

const port =
	process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 4000;

app.listen(3000);