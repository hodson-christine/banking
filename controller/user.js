let userModel = require("../models/user");
let auth = require("../auth.secret");
let jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
	let { email } = req.body;
	await userModel.findOne({ email }).then((emailExists) => {
		if (emailExists) {
			return res.status(400).send({ message: "email exists" });
		} else {
			const userData = ({ email, password, firstname, lastname } = req.body);

			let savedUser = new userModel(userData);
			savedUser.email = email.toLowerCase();
			savedUser.save().then((savedUser) => {
				console.log(savedUser);
				if (savedUser) {
					return res
						.status(200)
						.send({ message: "saved successfully", savedUser });
				} else {
					return res.status(400).send({ message: "not saved" });
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
				if (results) {
					res.status(200).send({ message: "logged in ", results, token });
				} else {
					res.status(400).send({ message: "not logged in" });
				}
			}
		);
	});
};

exports.forgotPassword = async (req, res) => {
	const email = req.body.email;
	await userModel.findOne({ email }).then((userData) => {
		if (userData) {
			return res
				.status(200)
				.send({ message: "user details (forgot password)", userData });
		} else {
			return res.status(400).send({ message: "Email not found!" });
		}
	});
};

exports.changePassword = (req, res) => {
	let id = { _id: req.params.id };
	let { password } = req.body;
	userModel.updateOne(id, password, (err, results) => {
		if (err)
			res.status(500).json({
				message: "not updated",
				err: err,
			});
		userModel.findById(req.params.id).then(async (results) => {
			results.password = password;
			await results.save();
			jwt.sign(
				{ results },
				auth.secreteKey,
				{ expiresIn: "1h" },
				(error, token) => {
					let message = `updated`;
					res.status(200).json({ message, results, token });
				}
			);
		});
	});
};
