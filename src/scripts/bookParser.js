const fs = require('fs');
const es = require('event-stream');

//joining path of directory

let wordMap = {};

const parseLine = (line) => {
  let words = line
    .replace(/[\.,;:\-_\$\(\)\{\}\[\]\'\`\\\/\&!\d\=\+>\"]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ');
  // console.log(words);
  words.forEach((word) => {
    // console.log(word, wordMap[word]);
    wordMap[word] = (wordMap[word] || 0) + 1;
  });
};

  

const parseBookWithEs = (fileName) => {
  // const s =
  fs.createReadStream(fileName)
    .pipe(es.split())
    .pipe(
      es.mapSync((line) => {
        parseLine(line);
      }),
    )
    .on('error', (err) => {
      console.log(err);
    })
    .on('end', () => {
      // console.log(wordMap);
      let keys = Object.keys(wordMap);
      fs.createWriteStream('./wordCountRes.json').write(
        JSON.stringify(wordMap),
      );
      keys.sort((k1, k2) => wordMap[k2] - wordMap[k1]);
      for (let i = 0; i < 10; i++) {
        console.log(keys[i], '(', wordMap[keys[i]], ')');
      }
    });
};

// const getTopWords = () => {
//   parseBook();
//   // console.log(wordMap);
// };

// getTopWords();

parseBookWithEs('./sample-2mb-text-file.txt');
