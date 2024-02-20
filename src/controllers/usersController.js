const express = require('express');

const usersService = require('../services/usersService');
const { extractErrorMessages } = require('../utils/errorHelpers');

const router = express.Router();

router.get('/register', (req, res) => {
	res.render('users/register', { pageTitle: 'Register', path: '/register' });
});

router.post('/register', async (req, res) => {
	const { name, email, password, repeatPassword } = req.body;

	try {
		await usersService.isEmailAvailable(email);
		await usersService.register(name, email, password, repeatPassword);
	} catch (error) {
		const errors = extractErrorMessages(error);
        console.log(errors);
        return res.render('users/register', { pageTitle: 'Register', path: '/register' });
	}

	res.redirect('/');
});

module.exports = router;
