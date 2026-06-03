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

const checkStock = (medicine) => {
   return new Promise((resolve, reject) => {
       if (medicine.quantity > 50) resolve(medicine);
       else reject(new Error('Out of Stock'));
  });
};

async function processOrder(name) {
    try {
         const medicine = await findMedicine(name);
             console.log('Found:', medicine.name);
        const checked = await checkStock(medicine);
             console.log('In stock:', checked.quantity);
    } catch(error) {
           console.log('Error:', error.message);
    }
}

processOrder('Amlovar');
processOrder('Unaben');
