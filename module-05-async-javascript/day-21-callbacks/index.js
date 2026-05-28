function getMedicine(name, callback) {
      console.log(`Searching for ${name}...`);
      if (name === 'Unknown') {
         callback(new Error('Medicine not found'), null);
         return;
}
     callback(null, {name: name, price: 500});
}

function checkStock(medicine, callback) {
     if (medicine.price > 400) {
        callback(null, {...medicine, quantity: 400});
        return;
     }
        callback(new Error('Out of Stock'), null);
}

function generateReceipt(medicine, callback) {
    const receipt = `Receipt: ${medicine.name} - Price: ${medicine.price} - Qty: ${medicine.quantity}`;
      callback(null, receipt);
}

getMedicine('Ibuprofen', (error, medicine) => {
        if (error) { console.log('Error:', error.message); return; }
     checkStock(medicine, (error, medicine) => {
                if (error) { console.log('Error:', error.message); return; }
            generateReceipt(medicine, (error, receipt) => {
                    if (error) { console.log('Error:', error.message); return; }
                    console.log(receipt);
            });
     });
});

