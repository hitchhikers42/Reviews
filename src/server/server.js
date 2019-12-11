const express = require('express');
const path = require('path');
const db = require('./db/model');
const server = express();

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.json()); //sets up req.body without needing additional middleware

server.get('/api/reviews/full/:id', function(req, res) {
  if (0 <= :id <= 100) {
    res.headers(201)
    db(:id)
    .then((json) => res.write(json));
  }
  res.headers(404);
});

module.exports = server;