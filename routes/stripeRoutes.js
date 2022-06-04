const express = require("express");
const { paymentIntent } = require("../controllers/stripeController");


const router = express.Router();

router.post("/create-payment-intent", paymentIntent);


module.exports = router;