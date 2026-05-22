const fs = require('fs');
const chalk = require('chalk');
const EventEmitter = require('events');
const emitter = new EventEmitter();

const readStream = fs.createReadStream('bigfile.txt');

readStream.on('data', (chunk) => {
         console.log('Buffer:', chunk);
         console.log('Size:', chunk.length, 'bytes');
         console.log('As string:', chunk.toString());

emitter.emit('chunkProcessed', chunk.length);

});

readStream.on('end', () => {
         console.log('Finished reading file.');

const streamEnd = '\nStream completed.';
fs.appendFileSync('output.txt', streamEnd, 'utf8');
          console.log('File updated.');
          console.log(chalk.bold.yellow('All batches processed.'));
});

emitter.on('chunkProcessed', (chunkSize) => {
       console.log(chalk.green(chunkSize));
});
