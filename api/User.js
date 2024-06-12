const mongoose = require('mongoose')
const { Schema } = mongoose 

const userSchema = new Schema({
    name: {
        type: String,
        required: true 
    },
    email: {
        type: String, 
        required: true, 
        unique: true, // unique: 색인(primary key) email 중복불가 
    },
    userId: {
        type: String,
        required: true 
    },
    password: {
        type: String, 
        required: true
    },
    isAdmin: {
        type: Boolean, 
        default: false 
    },
    createdAt: {
        type: Date, 
        default: Date.now 
    },
    lastModifiedAt: {
        type: Date, 
        default: Date.now 
    }
})
const User = mongoose.model('User', userSchema)
module.exports = User