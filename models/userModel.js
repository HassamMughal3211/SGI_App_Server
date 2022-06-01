const moongose = require('mongoose');
const bcrypt = require("bcryptjs");

const userSchema = new moongose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lower: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        select: false
    },
    
});



userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    var encryptedPassword = await bcrypt.hash(this.password, 12);
    this.password = encryptedPassword;
    this.passwordConfirm = undefined;
    next();
})

const Auth = new moongose.model("Auth", userSchema);

module.exports = Auth;