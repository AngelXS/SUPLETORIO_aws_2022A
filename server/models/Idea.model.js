const mongoose = require('mongoose');
const IdeaSchema = new mongoose.Schema({
    autor: {
        type: String,
        required: [true, 'Autor es obligatorio']
    },
    contenido: {
        type: String,
        required: [true, 'Contenido es obligatorio']
    },
    likes: {
        type: Number,
    }
});
const Idea = mongoose.model('Idea', IdeaSchema);
module.exports = Idea;
