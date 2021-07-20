
const router = require('express').Router();
const fs = require('fs');
const { v1: uuidv1 } = require('uuid');
const path = require('path');


router.get('/notes', (req, res) => {
  
  let database = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json')));
  
  res.json(database);
});

router.post('/notes', (req, res) => {
  let database = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json')));
  const newNote = {
    ...req.body, id: uuidv1(),
  };
  database.push(newNote);
  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(database));
  res.json(database);
});


module.exports = router;
