const express = require("express");
const { signup, fetchUser, signin } = require("../controllers/authController");
const { paymentIntent } = require("../controllers/stripeController");


const router = express.Router();

router.post("/create-payment-intent", paymentIntent);


module.exports = router;