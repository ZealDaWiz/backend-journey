const fs = require('fs');

const readStream = fs.createReadStream('bigfile.txt');

readStream.on('data', (chunk) => {
        console.log('Buffer:', chunk);
        console.log('Size:', chunk.length, 'bytes');
        console.log('As string:', chunk.toString());
});

