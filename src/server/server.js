const express = require('express');
const path = require('path');
const db = require('./db/model');
const server = express();

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.json()); //sets up req.body without needing additional middleware

server.get('/api/reviews/full/:id', function(req, res) {
  let id = req.params.id;
  console.log(id);
  if (0 <= id <= 100) {
    res.statusCode = 201;
    db(id)
      .then((obj) => {
        let json = JSON.stringify(obj);
        console.log(json);
        res.end(json);
      });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

module.exports = server;