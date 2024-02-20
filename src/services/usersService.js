const User = require('../models/User');
const { VALIDATION_MESSAGES } = require('../utils/messages');

const isEmailAvailable = async (email) => {
	const user = await User.find({ email: email }).lean();

	if (user) {
		return false;
	}

	return true;
};

