const path = require('path');

const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');


const expressConfig = (app) => {
    app.use(express.static(path.resolve(__dirname, '..', 'public')));
	app.use(express.urlencoded({ extended: false }));
    app.use(helmet());
    app.use(cookieParser());
};

module.exports = expressConfig;