const express = require('express');

const usersService = require('../services/usersService');

const router = express.Router();

router.get('/register', (req, res) => {
	res.render('users/register', { pageTitle: 'Register' });
});

router.post('/register', async (req, res) => {
	const { name, email, password, repeatPassword } = req.body;

	try {
		await usersService.isEmailAvailable(email);
		await usersService.register(name, email, password, repeatPassword);
	} catch (error) {
		console.log(error);
	}

	res.redirect('/');
});

module.exports = router;
