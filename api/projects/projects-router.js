const express = require('express')
const Projects = require('./projects-model')
const mw = require('../middleware/middleware')

const router = express.Router();


//endpoints

//get array of projects
router.get('/api/projects', (req,res)=>{
    Projects.get()
    .then(project =>{
        res.status(200).json(project);
    })
    .catch(err =>{
        res.status(500).json(err.message);
    })
})

//get project by id
router.get('/api/projects/:id', mw.validateId(Projects), (req,res)=>{
    res.status(200).json(req.project)
})

//post project
router.post('/api/projects/', mw.validateProjectPost(Projects), (req,res)=>{
    res.status(201).json(req.newPost)
})

//update project
router.put('/api/projects/:id', mw.validateId(Projects), mw.validateProjectPut(Projects), (req,res) =>{
    res.status(201).json(req.updatedPost)
})

//delete project
router.delete('/api/projects/:id', mw.validateId(Projects), (req, res) =>{
    Projects.remove(req.id)
    .then(()=>{
        res.json()
    })
})

//get list of actions by project id, as an array
router.get('/api/projects/:id/actions', mw.validateId(Projects), (req, res) =>{
    res.status(200).json(req.actionsArray)
})


module.exports = router;