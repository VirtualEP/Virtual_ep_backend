const mongoose = require('mongoose')

const subscribeSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    subcribeToChannel:{
        type: String,
        required: true
    },
    SubcribeDate:{
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Subscriber', subscribeSchema)
