const fs = require("fs"),
  path = require("path");
function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((f) => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir("./", function (filePath) {

  const rawdata = fs.readFileSync(path.resolve(__dirname, filePath));
  const fileName = filePath.split(".")[0];
  console.log(fileName, fs.statSync(filePath).size);
  // console.log(`import ${fileName.split('/')[fileName.split('/').length - 1]} from './assets/${filePath.replace(/\\/g, '/')}'`)
  console.log(`import ${fileName.split('/')[fileName.split('/').length - 1]} from './${filePath}' `)
  // fs.writeFile(
  //   `${ fileName }.png`,
  //   rawdata,
  //   function (err) {
  //     if (err) throw err;
  //     console.log(`${ fileName }.png saved!`);
  //   }
  // );
});
