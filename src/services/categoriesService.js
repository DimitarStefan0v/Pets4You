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

				categoriesObj = JSON.parse(data);
				for (const key in categoriesObj) {
					Category.create({ animalType: key })
						.then((categoryResult) => {
							for (const breedName of categoriesObj[key]) {
								Breed.create({ name: breedName, category: categoryResult._id })
									.then((breedResult) => {
										Category.findByIdAndUpdate(categoryResult._id, {
											$push: { breeds: breedResult._id },
										}).then((res) => res);
									})
									.catch((error) => {
										throw Error(error);
									});
							}
						})
						.catch((error) => {
							throw Error(error);
						});
				}
			}
		);

        return 'Categories seeded successfully';
	}

    return 'Found categories. Seeding not initiated.'
};
