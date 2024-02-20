const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minLength: 6,
    },
    email : {
        type: String,
        trim: true,
        required: true,
    }

});

const User = mongoose.model('User', userSchema);

module.exports = User;