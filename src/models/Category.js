const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    animalType: String,
    breeds: [{
        type: mongoose.Types.ObjectId,
        ref: 'Breed',
    }],
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;