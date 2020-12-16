const fs = require("fs"),
  path = require("path");
function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((f) => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}
const allFiles = []
walkDir("./", function (filePath) {

  const rawdata = fs.readFileSync(path.resolve(__dirname, filePath));
  const fileName = filePath.split(".")[0];
  // console.log(fileName, fs.statSync(filePath), filePath);
  // console.log(`import ${fileName.split('/')[fileName.split('/').length - 1]} from './assets/${filePath.replace(/\\/g, '/')}'`)
  if (filePath.includes('.pdf')) {
    allFiles.push(`{key: '${filePath}', size: ${fs.statSync(filePath).size}, url: ${fileName.split('/')[fileName.split('/').length - 1]}}`)
    //   console.log(`import ${ fileName.split('/')[fileName.split('/').length - 1] } from './${filePath}' `)
  }
  // fs.writeFile(
  //   `${ fileName }.png`,
  //   rawdata,
  //   function (err) {
  //     if (err) throw err;
  //     console.log(`${ fileName }.png saved!`);
  //   }
  // );
});
console.log(allFiles);
// console.log("---------", allFiles[0].split('/')[0]);
// const abc = allFiles.map(x => x.split('/')).flat();
// console.log(bcd);

const exist = []
const exist2 = []

// const a = abc.map((x, index) => {
//   if (!x.includes('pdf') && !exist.includes(x)) {
//     exist.push(x)
//     return { id: x, name: x, children: [({ id: abc[index + 1], name: abc[index + 1] })] }
//   } if (x.includes('pdf') && !exist.includes(x)) {
//     exist2.push(x)
//     return { id: x, name: x }
//   }
// })

// console.log(a);
