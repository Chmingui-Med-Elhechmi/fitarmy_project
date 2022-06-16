const User = require("../Models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  register: async (req, res) => {
    try {
      const {
        role,
        firstName,
        lastName,
        email,
        password,
        age,
        phoneNumber,
        gender,
        speciality,
      } = req.body;
      //unique email
      const searchEmail = await User.findOne({ email });
      if (searchEmail) {
        return res.status(400).send({ msg: "Email already exists." });
      }
      //hash password
      const salt = 10;
      const genSalt = bcrypt.genSaltSync(salt);
      const hashedPW = await bcrypt.hash(password, genSalt);
      //save new user //token

      const newUser = await User.create({
        role,
        firstName,
        lastName,
        email,
        password: hashedPW,
        age,
        phoneNumber,
        gender,
        speciality,
      });
      //Token
      const token = jwt.sign(
        {
          role: newUser.role,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          speciality: newUser.clinic,
          phone: newUser.phone,
          email: newUser.email,
          id: newUser._id,
          gender: newUser.gender,
        },
        process.env.SecretKey
      );
      res.json({ user: newUser, token });
    } catch (error) {
      res.status(500).send({ msg: "Cannot save new user", error });
    }
  },
  //login user
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      //   find if the user exist
      const searchedUser = await User.findOne({ email });

      //if the email does not exist
      if (!searchedUser) {
        return res.status(400).send({
          msg: "Not a member ? Join our community !",
        });
      }

      // password are equals
      const match = await bcrypt.compare(password, searchedUser.password);
      if (!match) {
        return res.status(400).send({
          msg: "Your email or password is wrong, please try again.",
        });
      }
      // generate token
      const token = jwt.sign(
        {
          id: searchedUser._id,
          firstName: searchedUser.firstName,
          lastName: searchedUser.lastName,
          role: searchedUser.role,
          email: searchedUser.email,
        },
        process.env.SecretKey
      );
      res.status(200).send({
        user: searchedUser,
        msg: "Success",
        token,
      });
    } catch (error) {
      res.status(500).send({ msg: "Can not get user." });
    }
  },
  //get users
  getUsers: async (req, res) => {
    try {
      const users = await User.find().select("-password");
      res.json(users);
    } catch (error) {
      res.status(500).send({ msg: "can not get users", error });
    }
  },
  getTrainees: async (req, res) => {
    try {
      const doc = await User.find({ role: "Trainee" }).select("-password");
      res.json(doc);
    } catch (error) {
      res.status(500).json({ msg: "Can not get trainees.", error });
    }
  },
  getCoaches: async (req, res) => {
    try {
      const doc = await User.find({ role: "Coach" }).select("-password");
      res.json(doc);
    } catch (error) {
      res.status(500).json({ msg: "Can not get coaches.", error });
    }
  },
  deleteUser: async (req, res) => {
    try {
      if (req.params.id === req.userID || req.userRole === "Admin") {
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        res.json({ msg: "User deleted.", deleteUser });
      } else {
        res.json({ msg: "You are not authorized for this action." });
      }
    } catch (error) {
      res.status(500).json({ msg: "Can not delete user.", error });
    }
  },
  updateProfile: async (req, res) => {
    try {
      const { firstName, lastName, age, phoneNumber, gender, speciality } =
        req.body;
      const user = await User.findByIdAndUpdate(
        req.params.id,
        {
          firstName,
          lastName,
          age,
          phoneNumber,
          gender,
          speciality,
        },
        { new: true }
      );
      res.json(user);
    } catch (error) {
      res.status(500).json({ msg: "Can not update profile.", error });
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id).select("-password");
      res.json(user);
    } catch (error) {
      res.status(500).json({ msg: "Can not get user.", error });
    }
  },
};
