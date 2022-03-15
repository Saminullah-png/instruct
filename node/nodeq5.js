//move a file
let fs = require("fs");
let path = require("path");

let srcPath = path.join(__dirname, "file.txt");
// console.log(folderKaPath);

let destPath = path.join(__dirname, "newFolder");
// console.log(destPath);
fs.copyFileSync(srcPath, destPath);

fs.unlinkSync(srcPath);