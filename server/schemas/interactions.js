const mongoose = require("mongoose");

const ideaSchema = new mongoose.Schema({
    ideaID: Number,
    user: String,
    type: {
        type: Number,
        enum: [0, 1, 2]  // Assuming 'type' is either 0 or 1 or 2
    },
    reported: Boolean
});

module.exports = mongoose.model("Interactions", ideaSchema);
