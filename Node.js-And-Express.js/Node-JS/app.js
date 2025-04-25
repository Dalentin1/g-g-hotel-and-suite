// const os = require("os");
// // info about current user
// const user = os.userInfo();
// console.log(user);

// console.log(` The system Uptime is ${os.uptime()} seconds`);

// const currentOS = {
//   name: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem(),
// };

// console.log(currentOS);

// const path = require("path");

// console.log(path.sep);

// const filePath = path.join("/Adeola-Kay", "sub", "README.md");

// console.log(filePath);

// const base = path.basename(filePath);

// console.log(base);

// const absolute = path.resolve(
//   __dirname,
//   "Node.js-And-Express.js",
//   "Node-JS",
//   "01-Intro",
//   "02-Modules",
//   "Readme",
//   "Notes.txt"
// );
// console.log(absolute);

const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./Adeola/first.txt', 'utf8')
const second = readFileSync('./Adeola/second.txt', 'utf8')

console.log(first,second)

writeFileSync('./Adeola/result-sync.txt', `Here is the result : ${first}, ${second}`)


