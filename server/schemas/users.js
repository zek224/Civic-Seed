const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    user: String,
    name: String,
    pwd: String,
    type: {
        type: String,
        enum: ["Residential", "Official", "Admin"] // Assuming these are the possible types
    },
    zip: Number
});

module.exports = mongoose.model("Users", userSchema);
