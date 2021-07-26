const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("users", userSchema);
