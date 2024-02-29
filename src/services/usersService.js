const bcrypt = require('bcrypt');

const User = require('../models/User');
const { VALIDATION_MESSAGES } = require('../utils/messages');
const jwtPromises = require('../utils/jwtPromises');

exports.register = ({ firstName, lastName, email, password, repeatPassword }) =>
	User.create({ firstName, lastName, email, password, repeatPassword });

exports.login = async (email, password) => {
	const user = await User.findOne({ email: email }).lean();

    if (!user) {
        throw Error(VALIDATION_MESSAGES.INVALID_LOGIN);
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
        throw Error(VALIDATION_MESSAGES.INVALID_LOGIN);
    }

    const payload = { 
        _id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
     };

    const token = await jwtPromises.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
    
    return token;
};

exports.isEmailAvailable = async (email) => {
	const user = await User.findOne({ email: email }).lean();

	if (user) {
		throw Error(VALIDATION_MESSAGES.EMAIL_TAKEN);
	}
};
