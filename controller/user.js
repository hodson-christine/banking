let userModel = require("../models/user");
let auth = require("../auth.secret");
let jwt = require("jsonwebtoken");
let user_token;

exports.createUser = async (req, res) => {
	let { email } = req.body;

	await userModel.findOne({ email: email }).then((emailExists) => {
		if (emailExists) {
			res.send({ message: "email exists" });
		} else {
			let userData = req.body;
			const savedUser = new userModel(userData);
			savedUser.save().then((savedUser) => {
				if (savedUser) {
					res.status(200).send({ message: "saved successfully", savedUser });
				} else {
					res.status(400).send({ message: "not saved" });
				}
			});
		}
	});
};

exports.fetchUser = (req, res) => {
	userModel.find().then((getUsers) => {
		if (getUsers) {
			res.status(200).send({ message: "all users", getUsers });
		} else {
			res.status(500).send({ message: "no user" });
		}
	});
};

exports.login = async (req, res) => {
	let { email, password } = req.body;
	await userModel.findOne({ email, password }).then((results) => {
		jwt.sign(
			{ results },
			auth.secreteKey,
			{ expiresIn: "1h" },
			(error, token) => {
				user_token = token;
				return user_token;
			}
		);

		if (results) {
			res.status(200).send({ message: "logged in ", user_token, results });
		} else {
			res.status(400).send({ message: "not logged in" });
		}
	});
};
