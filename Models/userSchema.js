const mongoose = require("mongoose");
// const { isEmail } = require("validator");
// const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  role: {
    type: String,
    enum: ["Coach", "Trainee", "Admin"],
    default: "Trainee",
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["homme", "femme"],
    required: true,
  },
  speciality: {
    type: String,
    default: "General",
  },
  avatar: {
    imageURL: {
      type: String,
      default:
        "https://res.cloudinary.com/dfkgs6zsr/image/upload/v1636376320/Profile_avatar_placeholder_large_u3gfrg.png",
    },
    public_id: {
      type: String,
    },
  },
});

module.exports = mongoose.model("user", userSchema);
