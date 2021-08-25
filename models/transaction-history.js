const mongoose = require("mongoose");

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
});

module.exports = mongoose.model("trasaction", userSchema);
