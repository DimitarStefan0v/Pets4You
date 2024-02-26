const mongoose = require('mongoose');

const breedSchema = new mongoose.Schema({
    name: String,
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'Category',
    },
});

const Breed = mongoose.model('Breed', breedSchema);

module.exports = Breed;