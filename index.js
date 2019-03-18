// implement your API here
const express = require('express');

const db = require('./data/db.js');

const server = express();

server.use(express.json())

server.get('/users', (req, res) => {
    db
      .find('users')
      .then(users => {
          res.status(200).json(users)
      })  
      .catch(error => {
          res.status(500).json({error: "The users information could not be retrieved."})
      });
})









server.listen(4000, () => {
    console.log('\n** API up and running on port 4k **')
})