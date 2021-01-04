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
const allImport = []
walkDir("./", function (filePath) {
  let lastMod = "a"

  const rawdata = fs.readFileSync(path.resolve(__dirname, filePath));
  const fileName = filePath.split(".")[0];

  try {
    const stats = fs.statSync(filePath);
    lastMod = stats.mtime
  } catch (error) {
    console.log(error);
  }
  console.log('la date :', lastMod)

  // console.log(fileName, fs.statSync(filePath), filePath);
  // console.log(`import ${fileName.split('/')[fileName.split('/').length - 1]} from './assets/${filePath.replace(/\\/g, '/')}'`)
  allImport.push(`import ${fileName.split('/')[fileName.split('/').length - 1]} from './assets/${filePath.replace(/\\/g, '/')}'`)
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
// console.log(allFiles);
const filteredImport = allImport.filter(x => !x.includes("-") && !x.includes(".js") && !x.includes("+") && !x.includes("("))

const basicImport = `import React from 'react'\n
import FileBrowser from 'react-keyed-file-browser'\n
import { faFolder, faFolderOpen, faFilePdf, faFile, faImage } from "@fortawesome/free-solid-svg-icons";\n
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";\n
`
const render = `render() {
  return (
    <>
      <FileBrowser
        files={this.state.files}
        icons={{
          File: <FontAwesomeIcon icon={faFile} style={{ marginRight: '5px' }} />,
          Image: <FontAwesomeIcon icon={faImage} style={{ marginRight: '5px' }} />,
          PDF: <FontAwesomeIcon icon={faFilePdf} style={{ marginRight: '5px' }} />,
          Rename: <i className="i-cursor" aria-hidden="true" />,
          Folder: <FontAwesomeIcon icon={faFolder} style={{ marginRight: '5px' }} />,
          FolderOpen: <FontAwesomeIcon icon={faFolderOpen} style={{ marginRight: '5px' }} />,
          Delete: <i className="trash" aria-hidden="true" />,
          Loading: <i className="circle-notch spin" aria-hidden="true" />,
        }}
      />
    </>
  )
}
}`
// console.log("---------", allFiles[0].split('/')[0]);
// const abc = allFiles.map(x => x.split('/')).flat();
// console.log(bcd);
const data = `${basicImport}\n ${filteredImport.map(x => `${x} \n`).join(' ')}
\n\n
export class NestedEditableDemo extends React.Component {
state = {
  files: [${allFiles.map(x => `${x} \n`)}\n]\n}\n
${render}
`
fs.writeFile(
  'test.js',
  data,
  function (err) {
    if (err) throw err;
    console.log(`saved!`);
  }
);

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
