const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { VALIDATION_MESSAGES } = require('../utils/messages');

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		trim: true,
		required: [true, VALIDATION_MESSAGES.REQUIRED('собствено име')],
		minLength: [3, VALIDATION_MESSAGES.MIN_LENGTH('Собственото ви име', 3)],
		maxLength: [15, VALIDATION_MESSAGES.MAX_LENGTH('Собственото ви име', 15)],
        match: [/^[A-Za-zА-Яа-я]+$/, VALIDATION_MESSAGES.INVALID_NAME('собствено име')]
	},
    lastName: {
        type: String,
        trim: true,
        required: [true, VALIDATION_MESSAGES.REQUIRED('фамилно име')],
        minLength: [3, VALIDATION_MESSAGES.MIN_LENGTH('Фамилното ви име', 3)],
        maxLength: [15, VALIDATION_MESSAGES.MAX_LENGTH('Фамилното ви име', 15)],
        match: [/^[A-Za-zА-Яа-я]+$/, VALIDATION_MESSAGES.INVALID_NAME('фамилно име')]
    },
	password: {
		type: String,
		trim: true,
		required: [true, VALIDATION_MESSAGES.REQUIRED('парола')],
		minLength: [6, VALIDATION_MESSAGES.MIN_LENGTH('Паролата', 6)],
	},
	email: {
		type: String,
		trim: true,
        unique: true,
		required: [true, VALIDATION_MESSAGES.REQUIRED('имейл')],
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, VALIDATION_MESSAGES.INVALID_EMAIL]
	},
});

userSchema.virtual('repeatPassword').set(function(value) {
    if (value !== this.password) {
        throw new mongoose.MongooseError(VALIDATION_MESSAGES.PASSWORDS_MISSMATCH);
    }
});

userSchema.pre('save', async function() {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
});

const User = mongoose.model('User', userSchema);

module.exports = User;
