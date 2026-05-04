// ===== How Node.js Works =====
const os = require('os');

console.log('Platform: ' + os.platform());
console.log('Memory: ' + os.freemem());
console.log('Home: ' + os.homedir());

// ===== Importing from room mathHelpers.js using module.exports =====
const math = require('./mathHelpers');

console.log(math.add(5, 3));
console.log(math.multiply(4, 6));

// ===== Destructing of import in index.js room =====
const {add, multiply} = require('./mathHelpers');

console.log(add(10, 5));
console.log(multiply(3, 7));

// ==== Importing built in module 'path' index.js room =====
const path = require('path');

console.log(path.join('backend-journey', 'module-04', 'day-15'));
console.log(path.extname('index.js'));
console.log(path.basename('/data/termux/files/index.js'));
