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

//post action
router.post('/api/actions', mw.validatePost, (req, res) =>{
    res.status(201).json(req.newPost)
})

//update action with PUT
router.put('/api/actions/:id', mw.validateActionId, mw.validatePut, (req, res)=>{
    res.status(201).json(req.updatedPost)
})

//delete post
router.delete('/api/actions/:id', mw.validateActionId, (req, res)=>{
    Actions.remove(req.id)
    .then(()=>{
        res.json()
    })
})






module.exports = router;