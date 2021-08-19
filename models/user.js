const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
	email: {
		type: String,
	},
	password: {
		type: String,
		minLength: 8,
	},
	firstname: {
		type: String,
	},
	lastname: {
		type: String,
	},
});

module.exports = mongoose.model("users", userSchema);
