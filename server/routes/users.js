const express = require("express");
const router = express.Router();
const { getAllUsers } = require("../controllers/users");

// get functions from controllers

router.route("/").get(getAllUsers);

module.exports = router;
