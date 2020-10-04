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

async function getSign(birthDate) {
  const data = await getData();
  const length = data.characters.main.length;
  const mainCharacterIndex = Math.ceil(
    ((new Date().getDate() * parseInt(birthDate.day) * 1.67) / length) % length
  );
  return data.characters.main[mainCharacterIndex];
}

module.exports = {
  getSign,
};
