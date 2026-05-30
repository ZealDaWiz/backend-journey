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
};

const checkStock = (medicine) => {
  return new Promise((resolve, reject) => {
     if (medicine.quantity > 100) resolve(medicine);
     else reject(new Error('Out of Stock'));
  });
};

const generateReceipt = (medicine) => {
  return new Promise((resolve, reject) => {
    const receipt = `Receipt: ${medicine.name} - Price: NGN ${medicine.price} - Qty: ${medicine.quantity} - Prescription: ${medicine.requiresPrescription}`;
    fs.appendFileSync('receipt.txt', receipt, 'utf8');
       console.log('Files Updated.');
         resolve('Receipt generated successfully');
  });
};

findMedicine('Norduet')
    .then(medicine => {
         console.log(chalk.green('Found:', medicine.name))
         return medicine;
    })
    .then(medicine => checkStock(medicine))
    .then(medicine => generateReceipt(medicine))
    .catch(error => console.log(chalk.red('Error:', error.message)));

findMedicine('Secnidazole')
    .then(medicine => {
         console.log(chalk.green('Found', medicine.name))
         return medicine;
    })
    .then(medicine => checkStock(medicine))
    .then(medicine => generateReceipt(medicine))
    .catch(error => console.log(chalk.red('Error:', error.message)));

findMedicine('Amlovar')
    .then(medicine => checkStock(medicine))
    .then(medicine => {
         console.log(chalk.green(`low Stock: ${medicine.name} - Qty: ${medicine.quantity}`));
         return medicine;
    })
    .then(medicine => generateReceipt(medicine))
    .catch(error => console.log(chalk.red('Error:', error.message)));

const getMedicine = (name, price) => {
  return new Promise((resolve) => {
      resolve( {name: name, price: price});
  });
};

Promise.all([
     getMedicine('Pancemol', 350),
     getMedicine('Pyrantrin', 600),
     getMedicine('Unaben', 1000)
]).then(medicines => {
       medicines.forEach(m => console.log(chalk.green(m.name, '-', m.price)));
}).catch(error => console.log(chalk.red('Error:', error.message)));
