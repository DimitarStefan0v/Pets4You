const path = require('path');

const express = require('express');
const helmet = require('helmet');


const expressConfig = (app) => {
    app.use(express.static(path.resolve(__dirname, '..', 'public')));
	app.use(express.urlencoded({ extended: false }));
    app.use(helmet());
};

module.exports = expressConfig;