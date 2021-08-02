let jwt = require("jsonwebtoken");
const auth = require("../auth.secret");

exports.verify = (req, res, next) => {
	const bearerHeader = req.headers["authorization"];
	const token = bearerHeader.split(" ")[1];
	if (token === null) {
	}

	jwt.verify(token, auth.tokenAuth.secreteKey, (err, results) => {
		if (err) return res.status(404).send({ message: "Invalid token" });
		req.results = results;
	});
	next();
};
