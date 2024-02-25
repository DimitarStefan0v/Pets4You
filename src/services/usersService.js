const bcrypt = require('bcrypt');

const User = require('../models/User');
const { VALIDATION_MESSAGES } = require('../utils/messages');

exports.register = ({ name, email, password, repeatPassword }) =>
	User.create({ name, email, password, repeatPassword });

exports.login = async (email, password) => {
	const user = await User.findOne({ email: email }).lean();

    if (!user) {
        throw Error(VALIDATION_MESSAGES.INVALID_LOGIN);
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
        throw Error(VALIDATION_MESSAGES.INVALID_LOGIN);
    }

    // TODO: create token with jwt and return it
};

exports.isEmailAvailable = async (email) => {
	const user = await User.findOne({ email: email }).lean();

	if (user) {
		throw Error(VALIDATION_MESSAGES.EMAIL_TAKEN);
	}
};
