const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // Add require to make it a mandatory parameter
        unique: true // Add unique constraint to prevent duplicates
    },
    author: {
        type: String,
        required: true
    }
});

const BookModel = mongoose.model('Book', bookSchema);
module.exports = BookModel;
