const express = require('express');

const usersService = require('../services/usersService');
const { extractErrorMessages } = require('../utils/errorHelpers');

const router = express.Router();

router.get('/register', (req, res) => {
	res.render('users/register', {
		pageTitle: 'Register',
		path: '/register',
		messages: undefined,
		userData: {},
	});
});

router.post('/register', async (req, res) => {
	const userData = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		repeatPassword: req.body.repeatPassword,
	};

	try {
		await usersService.isEmailAvailable(userData.email);
		await usersService.register(userData);
	} catch (error) {
		const errors = extractErrorMessages(error);
		return res.render('users/register', {
			pageTitle: 'Register',
			path: '/register',
			messages: errors,
			userData,
		});
	}

	res.redirect('/login');
});

router.get('/login', (req, res) => {
	res.render('users/login', {
		pageTitle: 'Login',
		path: '/login',
		messages: undefined,
		userData: {},
	});
});

router.post('/login', async (req, res) => {
	const { email, password } = req.body;

	try {
		const token = await usersService.login(email, password);
        
        res.cookie('auth', token, { httpOnly: true });
	} catch (error) {
        const errors = extractErrorMessages(error);

		return res.render('users/login', {
			pageTitle: 'Login',
			path: '/login',
			messages: errors,
			userData: { email, password },
		});
	}

    res.redirect('/');
});

module.exports = router;
