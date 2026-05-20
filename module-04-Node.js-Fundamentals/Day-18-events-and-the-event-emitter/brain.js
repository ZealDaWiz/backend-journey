const chalk = require('chalk');	
const figlet = require('figlet');

const fs = require ('fs');

const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('medicineAdded', (batchInfo) => {
         console.log(`Warehouse received: ${batchInfo.medicine} - Quantity: ${batchInfo.quantity}`);

      const medicineAdded = `\n${batchInfo.medicine} - Quantity: ${batchInfo.quantity}`;
      fs.appendFileSync('inventory.txt', medicineAdded, 'utf8');
                  console.log('File Updated.');
      });

emitter.on('lowStock', (batchInfo) => {
         console.log(chalk.red(`ALERT: ${batchInfo.medicine} is running low. Only ${batchInfo.quantity} left`));

});

emitter.once('systemStart', () => {
      figlet('System started.', (error, data) => {
          if (error) {
            console.log('Error:', error.message);
            return;
          }
           console.log(chalk.blue(data));
     })
});

emitter.emit('systemStart');
emitter.emit('systemStart');
emitter.emit('medicineAdded', {medicine: 'Pancemol', quantity: 200});
emitter.emit('medicineAdded', {medicine: 'Hemafolin', quantity: 800});
emitter.emit('medicineAdded', {medicine: 'Obron-6', quantity: 1500});
emitter.emit('lowStock', {medicine: 'Sportsgenic', quantity: 15});
