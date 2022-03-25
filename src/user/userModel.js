const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true, match: /.+@.+..+/ },
    pass: { type: String, required: true },
    watchlist: [String],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
