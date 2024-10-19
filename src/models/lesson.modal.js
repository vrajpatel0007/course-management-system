const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const Lesson = mongoose.model('Lesson', lessonSchema);
module.exports = Lesson;
