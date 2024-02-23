const User = require('../models/User');
const { VALIDATION_MESSAGES } = require('../utils/messages');

exports.register = ({ name, email, password, repeatPassword }) =>
	User.create({ name, email, password, repeatPassword });

exports.login = async ({ email, password }) => {
	const user = await User.findOne({ email: email }).lean();

    if (!user) {
        throw Error(VALIDATION_MESSAGES.INVALID_LOGIN);
    }

    // TODO: validate password with bcrypt

    // TODO: create token with jwt and return it
};

exports.isEmailAvailable = async (email) => {
	const user = await User.findOne({ email: email }).lean();

	if (user) {
		throw Error(VALIDATION_MESSAGES.EMAIL_TAKEN);
	}
};
