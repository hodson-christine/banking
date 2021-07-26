let mongoose = require("mongoose")
let express = require("express")
let router = express.Router()
let userController = require("../controller/user")

router.post ("/create_user", userController.createUser )
router.post ("/fetch_user", userController.fetchUser )
router.post ("/login", userController.login )
module.exports = router

