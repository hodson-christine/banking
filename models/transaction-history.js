const mongoose = require("mongoose");

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
let yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;

let userSchema = mongoose.Schema({
	country: {
		type: String,
		require: true,
		trim: true,
	},
	transfer: {
		type: String,
		default: "Transfer",
		require: true,
	},
	user: {
		type: String,
		require: true,
		trim: true,
	},
	status: {
		type: String,
		require: true,
		default: "Pending",
	},
	accountNumber: {
		type: String,
		require: true,
		trim: true,
	},
	amount: {
		type: String,
		require: true,
		trim: true,
	},
	purpose: {
		type: String,
		require: true,
		trim: true,
	},
	userId: {
		type: String,
		require: true,
		trim: true,
	},
	date: {
		type: String,
		require: true,
		default: today,
	},
	dateCreated: {
		type: String,
		default: today,
	},
});

module.exports = mongoose.model("trasaction", userSchema);
