// the first bult in modules we would look at is OS stand for operating system see syntax below
// we could get information about user with this modules

const os = require("os");
// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(` The system Uptime is ${os.uptime()} seconds`);

// here are some other methods
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS)

// the next module we would look at is the PATH module
// this module enables work with file path easy
const path = require('path')

// we would be working with a separator property see syntax below
// it returns a platform specific separator

console.log(path.sep);

// the method is the join method it joins a sequence of paths segments using path platform separator as a parameter
// it also returns a normalized resulting path

const filePath = path.join('/Adeola-Kay', 'sub', 'README.md')

console.log(filePath)

// we can also get the base of the PATH
// this method is called basename see syntax below
const base = path.basename(filePath)

console.log(base)

// the next method we would be looking at is the resolved method
// this method returns and absolute path see synatx below
// absolute in the sense that it gives the full directory of the folder

const absolute = path.resolve(__dirname, "Adeola-Kay", "sub", "README.md");
const absolute1 = path.resolve(
  __dirname,
  "Node.js-And-Express.js",
  "Node-JS",
  "01-Intro",
  "02-Modules",
  "Readme",
  "Notes.txt"
);
console.log(absolute)
console.log(absolute1)

// The next modules we're going to look at is the FS
// this module gives us the access to interact with the file system we can either read a file or write one
// there're two methods to this module first we would look at the synchronized approach then we talk about the Asynchroinzed approach

// FS Synchornized approach
const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./Adeola/first.txt", "utf8");
const second = readFileSync("./Adeola/second.txt", "utf8");

console.log(first, second);

// this would create a new file in our main folder
writeFileSync(
  "./Adeola/result-sync.txt",
  `Here is the result : ${first}, ${second},`,
  { flag: 'a' }
  // this would let node open the new file created
);

// Fs Asynchronized approach
const { readFile, writeFile } = require("fs");

readFile('./Adeola/first.txt')





