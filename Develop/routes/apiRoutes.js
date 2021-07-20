
const router = require('express').Router();
const fs = require('fs');
const { v1: uuidv1 } = require('uuid');

const db = require('../db/db.json');

router.get('/notes', (req, res) => {
  let database = JSON.parse(fs.readFileSync('../db/db.json'));
  res.JSON(database);
});

router.post('/notes', (req, res) => {
  let database = JSON.parse(fs.readFileSync('../db/db.json'));
  const newNote = {
    ...req.body, id: uuidv1(),
  };
  database.push(newNote);
  fs.writeFileSync('../db/db.json', JSON.stringify(database));
  res.json(database);
});


module.exports = router;
