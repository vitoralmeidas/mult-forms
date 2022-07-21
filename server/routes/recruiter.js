const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getCodersUsersStatic,
} = require("../controllers/recruiter");

router.route("/").get(getAllUsers);

//url: http://localhost:5000/api/users/${level}
router.route("/:id").get(getCodersUsersStatic);

module.exports = router;
