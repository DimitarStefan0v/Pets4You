const User = require('../models/User');
const { VALIDATION_MESSAGES } = require('../utils/messages');

exports.isEmailAvailable = async (email) => {
	const user = await User.findOne({ email: email }).lean();

	if (user) {
		throw Error(VALIDATION_MESSAGES.EMAIL_TAKEN);
	}
};

exports.register = ({ name, email, password, repeatPassword }) =>
	User.create({ name, email, password, repeatPassword });
