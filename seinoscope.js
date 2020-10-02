const fs = require('fs');
const axios = require('axios');

// Reads the data.json file.
function getData() {
  return new Promise((resolve, reject) => {
    fs.readFile('./data.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const json = JSON.parse(data);
        resolve(json);
      }
    });
  });
}

async function getSign() {
  const data = await getData();
  return data.characters.main;
}

module.exports = {
  getSign,
};
