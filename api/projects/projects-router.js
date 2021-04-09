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

})



module.exports = router;