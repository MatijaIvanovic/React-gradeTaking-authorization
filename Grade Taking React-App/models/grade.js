const mongoose = require("mongoose");

const gradeSchema = new mongoose.Schema({
    title: String,
    mark: Number,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
});

const Grade = mongoose.model('Grade', gradeSchema);

module.exports = Grade;