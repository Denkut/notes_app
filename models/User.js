const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Invalid email",
    },
  },
  password: {
    type: String,
    require: true,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
