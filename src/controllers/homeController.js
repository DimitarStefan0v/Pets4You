const router = require('express').Router();

router.get('/', (req, res) => {
	res.render('home/home', { pageTitle: 'Безплатни обяви', path: '/' });
});

router.get('/404', (req, res) => {
    res.render('home/404', { pageTitle: 'Страницата не е намерена', path: '/404' });
});

module.exports = router;
