const IdeaController = require('../controllers/Idea.controller');
module.exports = function(app){
    app.post('/api/idea/new',IdeaController.crear);
    app.get('/api/ideas',IdeaController.obtenerIdeas);
    app.put('/api/idea/update/:id',IdeaController.updateLikes);
    app.delete('/api/idea/delete/:id',IdeaController.eliminar);
}