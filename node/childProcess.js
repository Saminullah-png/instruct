const cp = require('child_process');
//console.log(cp);

// cp.execSync("open chrome");

// console.log(cp);
// console.log("calc/ulator");
let content = cp.execSync("node os.js");
console.log("Output of os.js file" + content);