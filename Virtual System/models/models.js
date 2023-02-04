const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({

    first_name:{
                type: String,
                max: 18,
                min: 4,
                required: true
    },
    Last_name:{
        type: String,
        max: 15,
        min: 4,
        required: true
    },
    country:{
        type: String,
        max: 15,
        min: 4,
        required: true
    },
    email:{
        type: String,
        max: 15,
        min: 4,
        required: true
    },
    password:{
        type: String,
        max: 20,
        min: 4,
        required: true
    },
   
    user_date:{
        type: Date,
        required: true,
        default: Date.now
    },

})  

module.exports = mongoose.model('Students', studentSchema)