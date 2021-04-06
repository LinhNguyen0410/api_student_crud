//model
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const studentSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    birthday: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
    grade: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

const Student = ngoose.model("Student", studentSchema);

module.exports = Student;