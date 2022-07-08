const express = require("express");
const router = express.Router();
const { getAllUsers, createNewUser } = require("../controllers/users");

// get functions from controllers

router.route("/").get(getAllUsers);
router.route("/").post(createNewUser);

module.exports = router;
