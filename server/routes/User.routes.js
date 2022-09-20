const UserController = require('../controllers/User.controller');
module.exports = function(app){
    app.post('/api/user/new',UserController.crear);
    app.post('/api/user/login',UserController.login);
    app.get('/api/user/:alias',UserController.encontrarUno);
    app.get('/api/user/:email/email',UserController.encontrarEmail);
    app.get('/api/user/:id/id',UserController.encontrarID);
}