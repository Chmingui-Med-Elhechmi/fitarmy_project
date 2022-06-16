const express = require("express");
const router = express.Router();
const User = require("../Models/userSchema");
const {
  register,
  getUsers,
  getTrainees,
  getCoaches,
  login,
  deleteUser,
  updateProfile,
  getUser,
} = require("../controllers/usersController");
const auth = require("../middlewares/authMiddlewares");
const {
  validation,
  registerValidate,
  loginValidate,
} = require("../middlewares/validator");

router.post("/register", registerValidate(), validation, register);
router.post("/login", loginValidate(), validation, login);
router.get("/", getUsers);
router.get("/trainees", getTrainees);
router.get("/coaches", getCoaches);
router.delete("/deleteuser/:id", auth, deleteUser);
router.put("/update/:id", auth, updateProfile);
router.get("/user/:id", getUser);

module.exports = router;
