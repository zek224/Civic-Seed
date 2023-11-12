const mongoose = require("mongoose");

const ideaSchema = new mongoose.Schema({
    user: String,
    ideaID: Number,
    fundingAmount: Number
});

module.exports = mongoose.model("Funding", ideaSchema);
