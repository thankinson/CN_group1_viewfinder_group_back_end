// middleware
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../user/userModel");

exports.hashPass = async (req, res, next) => {
    try {
        req.body.pass = await bcrypt.hash(req.body.pass, 8);
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
};

exports.decryptPass = async (req, res, next) => {
    try {
        req.user = await User.findOne({ username: req.body.username });
        if (await bcrypt.compare(req.body.pass, req.user.pass)) {
            next();
        } else {
            throw new Error("Incorrect username / password");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
};

exports.checkToken = async (req, res, next) => {
    try {
        const decodedToken = await jwt.verify(
            req.header("Authorization").replace("Bearer ", ""),
            process.env.SECRET
        );
        req.user = await User.findById(decodedToken._id);
        if (req.user) {
            next();
        } else {
            throw new Error("No User Found");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
};
