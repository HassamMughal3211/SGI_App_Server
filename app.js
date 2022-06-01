const express = require("express");
const cors = require('cors');
const authRouter = require("./routes/authRoutes");


const app = express();
app.use(cors({ origin: true, credentials: true }));

//middleware
app.use(express.json());



//routers
app.use("/api/v1/auth", authRouter);


module.exports = app;