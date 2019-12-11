const express = require('express');
const path = require('path');
const db = require('./db/model');
const server = express();

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.json()); //sets up req.body without needing additional middleware

module.exports = server;