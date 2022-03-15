// read content of unorganised folder and make  an array which has extension name of each file
let fs = require("fs");
const path = require("path");

let foldeKaPath = path.join[__dirname, "node"];
// console.log(foldeKaPath);
let content = fs.readFileSync(foldeKaPath);
// console.log(content);
let extArr = [];
for (let i = 0; i < content.length; i++) {
    let name = content[i];
    let extName = path.extname(name);
    extArr.push(extName);
}
console.log(extArr);