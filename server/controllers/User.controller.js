const User = require('../models/User.model');
module.exports.crear = (request, response) => {
    const { name, alias, email, password, confirmPassword } = request.body;
    console.log(request.body.email);
    User.findOne({email: request.body.email})
        .then((user)=>{
            if(user!==null){
                response.status(400).json({msg: "Email ya registrado"})
            }
            else{
                User.create({
                    name, alias, email, password, confirmPassword
                })
                    .then((user) => response.json({newUser: user, msg: "User agregado correctamente"}))
                    .catch(err => response.status(400).json(err))
            }
        })
        .catch((err)=>{
            err => response.status(400).json({err: err, msg: "Error al consultar."})
        })    
}
module.exports.login = (request, response) => {
    User.findOne({email: request.body.email})
        .then((user) => {
            if(request.body.password === user.password){
                response.json({confirm: true});
            }
            else {
                response.json({confirm: false});
            }
        })
        .catch(err => response.status(400).json({err: err, msg: "User not found"}));
}
module.exports.encontrarUno = (request, response) => {
    User.findOne({alias: request.params.alias})
        .then((user) => {response.json({userF: user, msg: "Usuario encontrado"})})
        .catch(err => response.status(400).json({err: err, msg: "User not found"}));
}
module.exports.encontrarEmail = (request, response) => {
    User.findOne({email: request.params.email})
        .then((user) => {response.json({user: user, msg: "Usuario encontrado"})})
        .catch(err => response.status(400).json({err: err, msg: "User not found"}));
}
module.exports.encontrarID = (request, response) => {
    User.findOne({_id: request.params.id})
        .then((user) => {response.json({user: user, msg: "Usuario encontrado"})})
        .catch(err => response.status(400).json({err: err, msg: "User not found"}));
}