const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  createNewUser,
  getCodersUsersStatic,
} = require("../controllers/users");

// get functions from controllers

router.route("/").get(getAllUsers);
router.route("/").post(createNewUser);
router.route("/coders").get(getCodersUsersStatic);

module.exports = router;
