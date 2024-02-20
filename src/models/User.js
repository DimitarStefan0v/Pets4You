const mongoose = require('mongoose');

const { VALIDATION_MESSAGES } = require('../utils/messages');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: [true, VALIDATION_MESSAGES.REQUIRED('Името')],
		minLength: [3, VALIDATION_MESSAGES.MIN_LENGTH('Името', 3)],
		maxLength: [30, VALIDATION_MESSAGES.MAX_LENGTH('Името', 30)],
	},
	password: {
		type: String,
		trim: true,
		required: [true, VALIDATION_MESSAGES.REQUIRED('Паролата')],
		minLength: [6, VALIDATION_MESSAGES.MIN_LENGTH('Паролата', 6)],
	},
	email: {
		type: String,
		trim: true,
		required: [true, VALIDATION_MESSAGES.REQUIRED('Имейла')],
	},
});

const User = mongoose.model('User', userSchema);

module.exports = User;
