const fs = require('fs');

const readStream = fs. createReadStream('bigfile.txt', 'utf8');

readStream.on('data', (chunk) => {
       console.log('Chunk received:');
       console.log(chunk);
});

readStream.on('end', () => {
      console.log('Finished reading file.');
});


