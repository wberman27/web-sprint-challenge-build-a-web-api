const express = require('express');
const server = express();
const helmet = require('helmet');
const morgan = require('morgan');


server.use(express.json());
server.use(morgan('dev'));
server.use(helmet())

// Complete your server here!
// Do NOT `server.listen()` inside this file!
server.get('/', (req, res)=>{
    res.send(`<h1>Sprint Challenge API</h1>`)
});



module.exports = server;
