const mongoose = require("mongoose");

const ideaSchema = new mongoose.Schema({
    ideaID: Number,
    title: String,
    username: String,
    description: String,
    bloom: Number,
    wither: Number,
    reports: Number,
    hidden: Boolean,
    fundable: Boolean,
    fundingAmount: {
        type: Number,
        default: 0  // Assuming a default value of 0 for funding amount
    }
});

module.exports = mongoose.model("Ideas", ideaSchema);
