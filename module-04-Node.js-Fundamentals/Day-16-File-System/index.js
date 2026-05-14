const fs = require('fs');

const data = fs.readFileSync('patients.txt', 'utf8');
console.log(data);

