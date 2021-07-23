const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
	res.status(200).json({ message: "hello world" });
});

app.listen(3000);
