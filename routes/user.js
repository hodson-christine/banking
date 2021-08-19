let mongoose = require("mongoose");
let express = require("express");
let router = express.Router();
let userController = require("../controller/user");

router.post("/create_user", userController.createUser);
router.get("/fetch_user", userController.fetchUser);
router.post("/login", userController.login);
router.post("/changepassword/:id", userController.changePassword);
router.post("/forgotpassword", userController.forgotPassword);
module.exports = router;
