// let inputArr = process.argv;
// console.log(inputArr);

// let input = inputArr[2];
// console.log(input);
// console.log("hello");


let fs = require("fs");
const path = require("path");
// let path = require(path)
let folderPath = process.argv[2];
//console.log(folderPath);

let folderExists = fs.existsSync(folderPath);

if (folderExists) {
    //we will code
    //console.log("path is valid")
    let files = fs.readdirSync(folderPath);

    console.log(files);
} else {
    console.log("please enter a valid path!!");
}
let extensions = {
    Audio: [".mp3"],
    Video: [".mp4"],
    Document: [".xls", ".pdf"],
    Software: [".exe"]
};

function giveFolderName(ext) {
    for (let key in extensions) {
        let extArr = extensions(key);
        for (let i = 0; i < extArr.length; i++) {
            if (extArr[i] == ext) {
                return key;
            }
        }
    }
    return 'Others'
}