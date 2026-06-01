const findMedicine = (name) => {
   return new Promise((resolve, reject) => {
      const medicines = [
            {name: 'Amlovar', price: 700, quantity: 1800},
            {name: 'Pyrantrin', price: 1200, quantity: 900},
            {name: 'Unaben', price: 2000, quantity: 20}
      ];
      const found =  medicines.find(m => m.name === name);
         if (found) resolve(found);
         else reject(new Error('Medicine not found'));
     });
};

async function processOrder(name) {
    try {
         const medicine = await findMedicine(name);
              console.log('Found:', medicine.name);
    } catch(error) {
           console.log('Error:', error.message);
    }
}

processOrder('Amlovar');
processOrder('Unknown');
