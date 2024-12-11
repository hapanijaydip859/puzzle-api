let mongoose = require('mongoose')
let Schema = mongoose.Schema

let category =  new Schema({
    name : {
        type : String,
        required: true,
        unique: true,        
        trim: true,  
    },
    description : {
        type : String,
        trim: true,
    },
  
},
    { 
        timestamps: true
})
let CATEGORY = mongoose.model('category' , category)
module.exports = CATEGORY