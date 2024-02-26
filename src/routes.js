const router = require('express').Router();

const homeController = require('./controllers/homeController');
const usersController = require('./controllers/usersController');
const petsController = require('./controllers/petsController');

router.use(homeController);
router.use('/auth', usersController);
router.use('/pets', petsController);

router.use('*', (req, res) => {
    res.redirect('/404');
});

module.exports = router;