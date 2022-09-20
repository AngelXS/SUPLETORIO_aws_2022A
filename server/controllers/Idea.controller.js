const Idea = require('../models/Idea.model');
module.exports.crear = (request, response) => {
    const { autor, contenido } = request.body;
    let likes = 0;
    Idea.create({
        autor, contenido, likes
    })
        .then((idea) => response.json({newIdea: idea, msg: "Idea agregada correctamente"}))
        .catch(err => response.status(400).json(err))
}
module.exports.obtenerIdeas = (request, response) => {
    Idea.find({}).sort({likes: -1}).exec()
        .then((ideas) => response.json(ideas))
        .catch(err => response.status(400).json({err: err, msg: "No se pudo obtener ideas"}));
}
module.exports.updateLikes= (request, response) => {
    Idea.findOne({_id: request.params.id})
        .then((idea)=>{
            var me_gusta=parseInt(idea.likes+1);
            Idea.findOneAndUpdate({_id: request.params.id}, {
                ...request.params, likes: me_gusta
            }, {new: true})
                .then((idea) => response.json({ideaUpdate: idea, msg: "Idea actualizada con éxito"}))
                .catch(err => response.status(404).json({err: err, msg: "No se pudo actualizar"}))
        })
        .catch();
}
module.exports.eliminar = (request, response) => {
    Idea.findOneAndDelete({_id: request.params.id})
        .then((project) => response.json({projectDelete: project, msg: "Idea eliminada correctamente"}))
        .catch(err => response.status(400).json({err: err, msg: "No se pudo eliminar"}))
} 