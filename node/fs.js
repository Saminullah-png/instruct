let fs = require("fs");
console.log(fs);
let path = require("path");


//create
let filePath = path.join(__dirname, "file.txt");
console.log(filePath);

//read
fs.writeFileSync(filePath, "Again writing on existig file");
let cotent = fs.readFileSync(filePath, 'utf-8');
console.log(content);

//u-update
fs.appendFileSync(filePath, "newly added cotent");