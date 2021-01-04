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
walkDir("./src/maxibib", function (filePath) {
  let lastMod
  try {
    const stats = fs.statSync(filePath);
    lastMod = stats.mtime
  } catch (error) {
    console.log(error);
  }
  const fileName = filePath.split(".")[0];
  allImport.push(`import ${fileName.split('/')[fileName.split('/').length - 1]} from './${filePath.substring(4).replace(/\\/g, '/')}'`)
  if (filePath.includes('.pdf') || filePath.includes('.jpeg')) {
    allFiles.push(`{key: '${filePath.substring(12)}', size: ${fs.statSync(filePath).size}, url: ${fileName.split('/')[fileName.split('/').length - 1]}, modified: ${Date.parse(lastMod)}}`)
  }
});
console.log(allImport)
console.log(allFiles)
const filteredImport = allImport.filter(x => !x.includes("-") && !x.includes(".js") && !x.includes("+"))
const filteredFiles = allFiles.filter(x => !x.includes("-") && !x.includes(".js") && !x.includes("+"))

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

const data = `${basicImport}\n ${filteredImport.map(x => `${x.replace(/\(/g, "").replace(/\)/g, "")} \n`).join(' ')}
\n\n
export class Test extends React.Component {
state = {
  files: [${filteredFiles.map(x => `${x.replace(/\(/g, "").replace(/\)/g, "")} \n`)}]\n}\n
${render}
`
fs.writeFile(
  './src/Test.js',
  data,
  function (err) {
    if (err) throw err;
    console.log(`saved!`);
  }
);