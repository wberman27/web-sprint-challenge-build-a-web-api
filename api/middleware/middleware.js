const validateId = (model) => (req, res, next) => {
    const {id} = req.params;
    model.get(id) //use specified model from props
    .then(action =>{
        if(!action){
            res.status(404).json({message: `Action with id: ${id} does not exist.`})
        }else{
            req.action = action;
            req.id = id;
            next();
        }
    })
}

const validatePost = (model) => (req, res, next) => {
    const newPost = req.body;
        if(!newPost.project_id || !newPost.description || !newPost.notes){
            res.status(400).json({message: 'Please add a valid project_id, description, and notes'})
        }else{
            model.insert(newPost) //use specified model from props
            .then(post =>{
                req.newPost = post;
                next()
            })    
        }
}
const validatePut = (model) => (req, res, next) => {
    const {id} = req.params
    const updatedPost = req.body;
        if(!updatedPost.project_id || !updatedPost.description || !updatedPost.notes){
            res.status(400).json({message: 'Please add a valid project_id, description, and notes'})
        }else{
            model.update(id, updatedPost) //use specified model from props
            .then(post =>{
                req.updatedPost = post;
                next()
            })    
        }
}

module.exports = {
    validateId,
    validatePost,
    validatePut,
}