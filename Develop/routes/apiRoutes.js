
const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const store = require('../db/store.js');

router.get('/notes', (req, res) => {
  let database = JSON.parse(fs.readFileSync('../db/store.js'));
  res.JSON(database);
});

router.post('/notes', (req, res) => {
  let database = JSON.parse(fs.readFileSync('../db/'));
  const initNote = {
    ...req.body, id: uuidv4(),
  };
  database.push(initNote);
  fs.writeFileSync('../db/store.js', JSON.stringify(database));
  res.json(database);
});

router.delete('/notes/:id', (req, res) => {
  let database =JSON.parse(fs.readFileSync('../db/store.js'));
});

module.exports = router;
