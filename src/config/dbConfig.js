const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/pets';

const dbConnect = async () => {
    await mongoose.connect(uri);
};

module.exports = dbConnect;