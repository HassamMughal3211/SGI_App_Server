const express = require("express");
const cors = require('cors');
const authRouter = require("./routes/authRoutes");
const transactionRouter = require("./routes/transactionRoutes");
const stripeRouter = require("./routes/stripeRoutes");
const { stripeWebhook } = require("./controllers/stripeController");

const app = express();
app.use(cors({ origin: true, credentials: true }));

//stripe-webhook
app.post("/stripe-webhook", express.raw({ type: 'application/json' }), stripeWebhook);

//middleware
app.use(express.json());



//routers
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/transactions", transactionRouter);
app.use("/api/v1/stripe", stripeRouter);


module.exports = app;