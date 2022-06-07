const Auth = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


const signJWT = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_WEB_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })
}

exports.signup = async (req, res) => {
    try {
        var data = await Auth.create(req.body);
        var token = signJWT(data._id)
        res.status(200).json({
            status: "success",
            token,
            data,
        })
    } catch (error) {
        return res.status(404).json({
            error: error.message
        })
    }
}


exports.fetchUser = async (req, res) => {
    try {
        var users = await Auth.find();
        res.status(200).json({
            status: "success",
            data: {
                users
            }
        })
    } catch (error) {
        return res.status(404).json({
            error: error.message
        })
    }
};

exports.signin = async (req, res) => {
    try {
        var { email, password } = req.body;
        if (!email || !password) {
            return res.status(200).json({
                success: false,
                status: "error",
                message: "invalid email or password"
            })
        } else {
            var user = await Auth.findOne({ email }).select("+password");
            if (!user) {
                return res.status(200).json({
                    success: false,
                    status: "error",
                    message: "invalid email or password"
                })
            }
            var passwordVerified = await bcrypt.compare(password, user.password)
            if (!passwordVerified) {
                return res.status(200).json({
                    success: false,
                    status: "error",
                    message: "invalid email or password"
                })
            }
            else {
                var token = signJWT(user._id)
                res.status(200).json({
                    success: true,
                    status: "success",
                    token,
                    message: "Sign In Successful",
                    data: {
                        user
                    }
                })
            }
        }

    } catch (error) {
        return res.status(404).json({
            error: error.message
        })
    }
}
