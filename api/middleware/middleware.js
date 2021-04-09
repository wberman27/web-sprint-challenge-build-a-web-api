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

module.exports = {
    validateActionId,
}