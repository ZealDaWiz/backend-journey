const fs = require('fs');
const chalk = require('chalk');

const medicines = [
     {name: 'Amlovar', price: 700, quantity: 1800},
     {name: 'Pyrantrin', price: 1200, quantity: 900},
     {name: 'Unaben', price: 2000, quantity: 500}
];

function findMedicine(name, callback) {
   const found = medicines.find(m => m.name === name);
      if (found) {
         callback(null, found);
         return;
      }
         callback(new Error('Medicine not found'), null);
}

function checkStock(medicine, callback) {
      if (medicine.quantity > 50) {
         console.log(`Medicine: ${medicine.name} - Price: ${medicine.price} - Qty: ${medicine.quantity}`);
         callback(null, medicine);
         return;
      }
        callback(new Error('Out of Stock'), null);
}

function generateReceipt(medicine, callback) {
   const receipt = `Receipt: ${medicine.name} - price: ${medicine.price} - quantity: ${medicine.quantity}`;
      fs.appendFileSync('receipt.txt', receipt, 'utf8');
        console.log(chalk.green('File Updated.'));

       callback(null,'Receipt successfully generated');
}

findMedicine('Amlovar', (error, medicine) => {
         if (error) { console.log('Error:', error.message); return; }
      checkStock(medicine, (error, medicine) => {
             if (error) { console.log('Error:', error.message); return; }
           generateReceipt(medicine, (error, receipt) => {
                       if (error) { console.log('Error:', error.message); return; }
                          console.log(chalk.green(receipt));
           });
      });
});

findMedicine('Norduet', (error, medicine) => {
         if (error) { console.log(chalk.red('Error:', error.message)); return; }
      checkStock(medicine, (error, medicine) => {
             if (error) { console.log(chalk.red('Error:', error.message)); return; }
           generateReceipt(medicine, (error, receipt) => {
                       if (error) { console.log(chalk.red('Error:', error.message)); return; }
                          console.log(chalk.green(receipt));
           });
      });
});
