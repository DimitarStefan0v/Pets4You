const User = require('../models/User');
const { VALIDATION_MESSAGES } = require('../utils/messages');

exports.isEmailAvailable = async (email) => {
	const user = await User.find({ email: email }).lean();

	if (user) {
		throw Error(VALIDATION_MESSAGES.EMAIL_TAKEN);
	}
};


};

