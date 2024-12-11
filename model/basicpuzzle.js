let mongoose = require('mongoose')
let Schema = mongoose.Schema

let basic =  new Schema({
    title : {
        type : String,
        required: true
    },
    description : {
        type : String,
    },
    difficulty : {
        type : String,
        enum: ['easy', 'medium', 'hard'],
        default: 'medium'
    }
},
    { 
        timestamps: true
})
let BASIC = mongoose.model('Basic' , basic)
module.exports = BASIC