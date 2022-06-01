const express = require("express");
const { signup, fetchUser, signin } = require("../controllers/authController");


const router = express.Router();

router.post("/signup", signup);
router.get("/", fetchUser);
router.post("/signin", signin);


module.exports = router;