require("dotenv").config();
const app = require("./app");
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_STRING).then((con) => {
    console.log("connected");
    // console.log(con.connections);
})


app.listen(process.env.PORT || 8000, () => {
    console.log("server started")
})