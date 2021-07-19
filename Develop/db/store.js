const utils = require('util');
const fs = require('fs');
const idGenerator = require('uuid/v1');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store{
  // write a method to read all of the notes in the database called read
  read(){
    return readFileAsync('./db/db.json');
    // write writeFileAsync('./db/db.json');
    // creating CRUD Routes
  }
// get notes and read method and write method

};

module.exports = new Store();