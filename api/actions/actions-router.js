//imports
const express = require('express')
const Actions = require('./actions-model')
const mw = require('../middleware/middleware')
//setup router
const router = express.Router();

//endpoints

//get array of actions
router.get('/api/actions', (req, res) =>{
    Actions.get()
    .then(action =>{
        res.status(200).json(action)
    })
    .catch(err =>{
        res.status(500).json(err.message)
    })
})

//get action by id
router.get('/api/actions/:id', mw.validateActionId, (req,res) =>{
    res.status(200).json(req.action);
})





module.exports = router;