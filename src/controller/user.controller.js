const User = require("../model/User");

const userController = {
  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
  newUser: async (req, res) => {
    try {
      const newUser = await User.create({
        username: "arash",
        mobile: "09223421043",
      });
      console.log(newUser);
      res.status(201).json(newUser);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
};

module.exports = userController;
