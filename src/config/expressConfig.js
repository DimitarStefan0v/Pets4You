const path = require('path');

const express = require('express');


const expressConfig = (app) => {
	app.use(express.urlencoded({ extended: false }));
    app.use(express.static(path.resolve(__dirname, '..', 'public')));
};

module.exports = expressConfig;