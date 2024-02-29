const router = require('express').Router();

router.get('/search', (req, res) => {
	res.render('pets/search', { pageTitle: 'Домашни любимци', path: '/search' });
});

router.get('/add-post', (req, res) => {
	res.render('pets/add-post', { pageTitle: 'Добави обява', path: '/add-post' });
});

router.post('/add-post', (req, res) => {
	const data = {
        name: req.body.name,
        years: req.body.years,
        months: req.body.months,
        ownerFirstName: req.user.firstName,
        ownerLastName: req.user.lastName,
    };

	console.log(data);

	res.render('pets/add-post', { pageTitle: 'Добави обява', path: '/add-post' });
});

module.exports = router;
