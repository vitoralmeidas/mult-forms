const express = require("express");
const router = express.Router();
const { createNewUser } = require("../controllers/users");

// get functions from controllers
router.route("/").post(createNewUser);

module.exports = router;
