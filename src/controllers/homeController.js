const router = require('express').Router();

router.get('/', (req, res) => {
	res.render('home/home', { pageTitle: 'Home', path: '/' });
});

module.exports = router;
