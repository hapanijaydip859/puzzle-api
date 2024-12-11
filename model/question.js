const mongoose = require('mongoose');

// Define the Question schema
const questionSchema = new mongoose.Schema({
    questionText: {
        type: String,
        required: true
    },
    choices: {
        type: [String], // Array of answer choices
        required: true
    },
    correctAnswer: {
        type: String, // The correct answer
        required: true
    },
},
{
    timeseries : true
});
let QUESTION = mongoose.model('question' , questionSchema)
module.exports = QUESTION