const fs = require('fs');
let data;
const monthMap = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
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
  const { day, month, year } = birthDate;
  data = await getData();
  const mainCharacter = getMainCharacter(day);
  const secondaryCharacter = getSecondaryCharacter(year, day);
  const quote = getQuote(mainCharacter, month, day);
  return { mainCharacter, secondaryCharacter, quote };
}

function getMainCharacter(day) {
  const length = data.characters.main.length;
  const characterIndex =
    Math.ceil(new Date().getDate() * parseInt(day) * 1.67) % length;
  return data.characters.main[characterIndex];
}

function getSecondaryCharacter(year, day) {
  const length = data.characters.secondary.length;
  const characterIndex =
    Math.ceil(
      new Date().getFullYear() ^ (parseInt(day) * parseInt(year) * 1.67)
    ) % length;
  return data.characters.secondary[characterIndex];
}

function getQuote(mainCharacter, month, day) {
  const quoteList = data.quotes[mainCharacter];
  const length = quoteList.length;

  const quoteIndex =
    Math.ceil(parseInt(monthMap.indexOf(month) + 1) * parseInt(day) * 1.67) %
    length;
  return quoteList[quoteIndex];
}

module.exports = {
  getSign,
};
