const express = require('express');

const usersService = require('../services/usersService');
const { extractErrorMessages } = require('../utils/errorHelpers');

const router = express.Router();

router.get('/register', (req, res) => {
	res.render('users/register', { pageTitle: 'Register', path: '/register', messages: undefined });
});

router.post('/register', async (req, res) => {
	const { name, email, password, repeatPassword } = req.body;

	try {
		await usersService.isEmailAvailable(email);
		await usersService.register(name, email, password, repeatPassword);
	} catch (error) {
		const errors = extractErrorMessages(error);
        return res.render('users/register', { pageTitle: 'Register', path: '/register', messages: errors });
	}

	res.redirect('/');
});

module.exports = router;
