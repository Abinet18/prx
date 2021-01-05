const path = require('path');
const fs = require('fs');
//joining path of directory

const getAllSVGFiles = async () => {
  const directoryPath = path.join(__dirname, '../../public/svgs');
  //passsing directoryPath and callback function
  fs.readdir(directoryPath, async function (err, files) {
    //handling error
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    files.forEach(async function (file) {
      // Do whatever you want to do with the file
      const subdir = file;
      file = path.resolve(directoryPath, file);
      fs.stat(file, async function (err, stat) {
        if (stat && stat.isDirectory()) {
          // console.log('reading directory', file);
          getSVGFiles(directoryPath, subdir);
          // console.log(fileNames);
        }
      });
    });
  });
};

const getSVGFiles = async (directoryPath, subdir) => {
  let dir = path.join(directoryPath, subdir);
  let fileNames = [];

  //passsing directoryPath and callback function
  console.log(dir);
  fs.readdir(dir, async function (err, files) {
    //handling error
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    files.forEach(function (file) {
      // Do whatever you want to do with the file
      // console.log(file);
      if (file.endsWith('.svg')) {
        const fileName = file.substring(0, file.length - 4);
        // const path = `/svgs/${subdir}/${file}`;
        // fileNames[`${fileName}`] = path;
        // console.log(fileName, path);
        fileNames.push(fileName);
      }
    });
    const fpath = path.join(__dirname, 'icons.js');

    fs.appendFile(
      fpath,
      `const ${subdir}=${JSON.stringify(fileNames)}\n`,
      (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      },
    );

    console.log(fileNames);
  });
};

getAllSVGFiles();
