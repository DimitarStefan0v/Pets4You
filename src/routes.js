const router = require('express').Router();

const homeController = require('./controllers/homeController');
const usersController = require('./controllers/usersController');

router.use(homeController);
router.use('/auth', usersController);

module.exports = router;