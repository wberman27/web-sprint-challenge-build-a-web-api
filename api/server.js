//imports
const express = require('express');
const server = express();
const helmet = require('helmet');
const morgan = require('morgan');
const actionsRouter = require('./actions/actions-router')

//use
server.use(express.json()); //tells server to use json format
server.use(morgan('dev')); //used for logging server request status
server.use(helmet()); //used for security
server.use(actionsRouter); //use actions router

//default response at homepage
server.get('/', (req, res)=>{
    res.send(`<h1>Sprint Challenge API</h1>`)
});



module.exports = server;
