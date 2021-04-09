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

router.post('/api/projects/', mw.validateProjectPost(Projects), (req,res)=>{
    res.status(201).json(req.newPost)
})

module.exports = router;