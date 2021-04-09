//imports
const express = require('express')
const Actions = require('./actions-model')
//setup router
const router = express.Router();

//endpoints
router.get('/api/actions', (req, res) =>{
    Actions.get()
    .then(action =>{
        res.status(200).json(action)
    })
    .catch(err =>{
        res.status(500).json(err.message)
    })
})





module.exports = router;