let mongoose = require('mongoose')
let Schema = mongoose.Schema
let userData = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
},
 {
    timeseries : true
})
let USER = mongoose.model('user' , userData)
module.exports = USER