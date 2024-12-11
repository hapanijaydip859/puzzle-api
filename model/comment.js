let mongoose = require('mongoose')
let Schema = mongoose.Schema

let comment =  new Schema({
    puzzleid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Basic', // Reference to the Puzzle the comment belongs to
        required: true,
      },
      userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', // Reference to the User who made the comment
        required: true,
      },
      commenttext: {
        type: String,
        required: true,
      },
      created_at: {
        type: Date,
        default: Date.now,
      },
})
let COMMENT = mongoose.model('comment' , comment)
module.exports = COMMENT