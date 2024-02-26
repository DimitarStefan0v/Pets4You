const fs = require('fs');
const path = require('path');

const Category = require('../models/Category');
const Breed = require('../models/Breed');

exports.seedInitialCategories = async () => {
	const categoriesCount = await Category.countDocuments();
	const breedsCount = await Breed.countDocuments();

	if (categoriesCount === 0 && breedsCount === 0) {
		fs.readFile(
			path.resolve(__dirname, '..', 'seeds', 'categories.json'),
			'utf8',
			(err, data) => {
				if (err) {
					throw Error(err);
				}

};
