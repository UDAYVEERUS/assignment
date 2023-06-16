const mongoose = require('mongoose')

const { Schema } = require('mongoose')

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    })

const users = mongoose.model('users', userSchema)

module.exports = users