const router = require('express').Router();

router.get('/', (req, res) => {
	res.render('home/home', { pageTitle: 'Home', path: '/' });
});

router.get('/404', (req, res) => {
    res.render('home/404', { pageTitle: 'Not Found', path: '/404' });
});

module.exports = router;
