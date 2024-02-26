const path = require('path');

const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config();
const compression = require('compression');

const { auth } = require('../middlewares/authMiddleware');

const expressConfig = (app) => {
    app.use(express.static(path.resolve(__dirname, '..', 'public')));
	app.use(express.urlencoded({ extended: false }));
    app.use(helmet());
    app.use(cookieParser());
    app.use(compression());
    app.use(auth);
};

module.exports = expressConfig;