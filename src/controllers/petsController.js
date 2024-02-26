const router = require('express').Router();

router.get('/search', (req, res) => {
    res.render('pets/search', { pageTitle: 'Pets', path: '/search' });
});

module.exports = router;
