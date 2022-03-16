//copy index.html file from module1 to a new folder inside module2 having name html.

let fs = require("fs");
let path = require("path");

let srcPath = path.join(__dirname, "..", "node", "demo.html");
console.log("source path-->", srcPath);

let destPath = path.join(__dirname, "..", "file.txt");
console.log("destination-->", destPath);
fs.copyFileSync(srcPath, destPath);