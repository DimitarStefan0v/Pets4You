const router = require('express').Router();

router.get('/search', (req, res) => {
	res.render('pets/search', { pageTitle: 'Домашни любимци', path: '/search' });
});

router.get('/add-post', (req, res) => {
    res.render('pets/add-post', { pageTitle: 'Добави обява', path: '/add-post'})
});

module.exports = router;
