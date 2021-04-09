const Actions = require('../actions/actions-model')

function validateActionId(req, res, next) {
    const {id} = req.params;
    Actions.get(id)
    .then(action =>{
        if(!action){
            res.status(404).json({message: `Action with id: ${id} does not exist.`})
        }else{
            req.action = action;
            next();
        }
    })
}

function validatePost(req, res, next) {
    const newPost = req.body;
        if(!newPost.project_id || !newPost.description || !newPost.notes){
            res.status(400).json({message: 'Please add a valid project_id, description, and notes'})
        }else{
            Actions.insert(newPost)
            .then(post =>{
                req.newPost = post;
                next()
            })    
        }
}

module.exports = {
    validateActionId,
    validatePost,
}