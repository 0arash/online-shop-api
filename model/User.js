const mongoose = require("mongoose");
const types = mongoose.Schema.Types;

const userSchema = new mongoose.Schema(
  {
    username: {
      type: types.String,
      required: true,
    },
    mobile: {
      type: types.String,
      unique: true,
    },
  },
  {
    versionKey: false,
  }
);

const User = mongoose.model("Users", userSchema);

module.exports = User;
