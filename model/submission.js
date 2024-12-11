const mongoose = require('mongoose');

// Define the Question schema
const submission = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', // Reference to the User model
        required: true
    },
    CategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category', // Reference to the Puzzle model
        required: true
    },
        QuestionId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'question' // Reference to a question in the Puzzle
        },
        answer: {
            type: String, // The answer the user submitted
            required: true
        },
    isCorrect: {
        type: Boolean, // Whether the user's answers were correct
        default: false
    },
    timeTaken: {
        type: Number, // Time taken in seconds to submit the puzzle
        required: true
    },
    submittedAt: {
        type: Date,
        default: Date.now // Time when the puzzle was submitted
    }
});
let SUBMISSION = mongoose.model('submission' , submission)
module.exports = SUBMISSION