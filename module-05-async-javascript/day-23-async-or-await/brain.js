const fs = require('fs');
const chalk = require('chalk');

const findMedicine = (name) => {
   return new Promise((resolve, reject) => {
    const medicines = [
          {name: 'Unaben', price: 1000, quantity: 3000, requiresPrescription: true},
          {name: 'Pyrantrin', price: 600, quantity: 1500, requiresPrescription: true},
          {name: 'Pancemol', price: 350, quantity: 2000, requiresPrescription: false},
          {name: 'Norduet', price: 700, quantity: 850, requiresPrescription: true},
          {name: 'Amlovar', price: 400, quantity: 107, requiresPrescription: false}
    ];
    const found = medicines.find(m => m.name === name);
          if (found) resolve(found);
          else reject(new Error('Medicine not found'));
   });
}

const checkStock = (medicine) => {
   return new Promise((resolve, reject) => {
    if (medicine.quantity > 200) resolve(medicine);
    else reject(new Error('Out of stock'));
   });
}

const generateReceipt = (medicine) => {
   return new Promise((resolve, reject) => {
     const receipt = `\nMedicine: ${medicine.name} - Price: ${medicine.price} - Qty: ${medicine.quantity} - Prescription: ${medicine.requiresPrescription}`;
       fs.appendFileSync('receipt.txt', receipt, 'utf8');
           console.log('File Updated.');
             resolve('Receipt generated successfully');
   });
}

async function processOrder(name) {
    try { 
        const medicine = await findMedicine(name);
            console.log(chalk.green('Found:', medicine.name));
        const checked = await checkStock(medicine);
           console.log(chalk.green('low inStock:', checked.quantity));
          await generateReceipt(checked);
    } catch(error) {
          console.log(chalk.red('Error:', error.message));
    }
}

processOrder('Pancemol');
processOrder('Obron-6');
processOrder('Amlovar');


const getMedicine = (name, price) => {
   return new Promise((resolve) => {
      resolve ({name: name, price: price});
   });
}

async function processAll() {
   try {
       const results = await Promise.all([
             getMedicine('Unaben', 1000),
             getMedicine('Pyrantrin', 600),
             getMedicine('Norduet', 700)
       ]);
          results.forEach(m => console.log(chalk.green(m.name, '-', m.price)));
   } catch(error) {
        console.log(chalk.red('Error:', error.message));
   }
}

processAll();
