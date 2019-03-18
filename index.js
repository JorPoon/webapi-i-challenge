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

server.get('/users/:id', (req, res) => {
    const { id } = req.params;
    db
      .findById(id)
      .then(users => {
          res.status(200).json(users)
      })
      .catch(error => {
          res.status(404).json({message: "The user with the specified id does not exist"})
      })  
    // const user = users.filter(user => user.id.toString()=== req.params.id)
})










server.listen(4000, () => {
    console.log('\n** API up and running on port 4k **')
})