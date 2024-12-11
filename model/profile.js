let mongoose = require('mongoose')
let Schema = mongoose.Schema
let userProfile = new Schema({
    firstName: {
        type: String,
        required: true
      },
      lastName: {
        type: String,
        required: true
      },
      profilePicture: {
        type: String,  // URL or filename for the profile picture
        default: ''
      },
      bio: {
        type: String,
        default: ''
      },
      birthDate: {
        type: Date
      },
      puzzlesCreated: {
        type: Schema.Types.ObjectId,
        ref: 'Basic'  // Reference to the Puzzle model
      },
      puzzlesUser: {
        type: Schema.Types.ObjectId,
        ref: 'user'  // Reference to the Puzzle model
      },
  },
 {
    timeseries : true
})
let PROFILE = mongoose.model('profile' , userProfile)
module.exports = PROFILE