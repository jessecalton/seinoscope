const fs = require('fs');
const csv = require('csv-parser');
let data;
let episodes = [];
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

function getEpisodeData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream('episodes.csv')
      .pipe(csv())
      .on('data', (data) => episodes.push(data))
      .on('end', () => {
        resolve(episodes);
      });
    // todo: error handling
  });
}

// Parses through data.json to retrieve seinoscope values
async function getSign(birthDate) {
  const { day, month, year } = birthDate;
  data = await getData();
  await getEpisodeData();
  const episode = getEpisode(month, day, year);
  const mainCharacter = getMainCharacter(day);
  const secondaryCharacter = getSecondaryCharacter(year, day);
  const quote = getQuote(mainCharacter.mainCharacter, month, day);
  return { ...mainCharacter, ...secondaryCharacter, quote, episode };
}

function getMainCharacter(day) {
  const length = data.characters.main.length;
  const characterIndex =
    Math.floor(new Date().getDate() ^ (parseInt(day) * 1.67)) % length;
  const mainCharacter = data.characters.main[characterIndex];
  return {
    mainCharacter: mainCharacter,
    mainCharacterImage: data.characters.imageUrl[mainCharacter],
  };
}

// Tested and verified randomness
function getSecondaryCharacter(year, day) {
  const length = data.characters.secondary.length;
  const characterIndex =
    ((new Date().getDate() ^ 1.67) *
      ((parseInt(year) * parseInt(day)) ^ 1.67)) %
    length;
  const secondaryCharacter = data.characters.secondary[characterIndex];
  return {
    secondaryCharacter: secondaryCharacter,
    secondaryCharacterImage: data.characters.imageUrl[secondaryCharacter],
  };
}

function getQuote(mainCharacter, month, day) {
  const quoteList = data.quotes[mainCharacter];
  const length = quoteList.length;

  const quoteIndex =
    (parseInt(monthMap.indexOf(month) + 1) * parseInt(day)) % length;
  return quoteList[quoteIndex];
}

function getEpisode(month, day, year) {
  const length = episodes.length;
  const episodeIndex =
    (parseInt(monthMap.indexOf(month) + 1) * year * parseInt(day)) % length;
  return episodes[episodeIndex];
}

module.exports = {
  getSign,
};
