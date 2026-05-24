const readline = require('readline');
const fs = require('fs');
const chalk = require('chalk');
const EventEmitter = require('events');
const emitter = new EventEmitter();

const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
});

emitter.on('medicineAdded', (batchInfo) => {
     console.log(`Medicine Inventory: ${batchInfo.medicine} - Quantity: ${batchInfo.quantity} - Prescription: ${batchInfo.prescription}`);
  });

function addMedicine() {
   rl.question('Enter medicine name: ', (medicine) => {
      rl.question('Enter quantity: ', (quantity) => {
        rl.question('Requires prescription? (yes/no): ', (prescription) => {
          const inventory = `\n${medicine} - Quantity: ${quantity} - Prescription: ${prescription}`;
          fs.appendFileSync('inventory.txt', inventory, 'utf8');
           console.log('Recorded successfully');
           emitter.emit('medicineAdded', {
                 medicine: medicine,
                 quantity: quantity,
                 prescription: prescription
           });
          showMenu();
        });
      });
   });
}

function viewAllMedicines() {

    const readStream = fs.createReadStream('inventory.txt', 'utf8');

    readStream.on('data', (chunk) => {
        console.log('Chunk received:');
        console.log(chalk.green(chunk));
    });

    readStream.on('end', () => {
        console.log('Finished reading file');
        showMenu();
    });
}

function showMenu() {
     console.log('\n1. Add medicine');
     console.log('2. View all medicines');
     console.log('3. Exit');

    rl.question('Choose an option: ', (choice) => {
            if (choice === '1') {
             addMedicine();
            }
           else if (choice === '2') {
             viewAllMedicines();
           }
           else if (choice === '3') {
             console.log(chalk.bold.yellow('Goodbye'));
             rl.close();
           } else {
             console.log('Invalid option.');
           }
   });
}

showMenu();
