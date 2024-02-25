const jwtPromises = require('../utils/jwtPromises');

exports.auth = async (req, res, next) => {
	const token = req.cookies['auth'];

	if (token) {
		try {
			const decodedToken = await jwtPromises.verify(token, process.env.JWT_SECRET);

			req.user = decodedToken;
			res.locals.user = decodedToken;
			res.locals.isAuthenticated = true;

			next();
		} catch (error) {
			res.clearCookie('auth');
			res.redirect('/auth/login');
		}
	} else {
		next();
	}
};

