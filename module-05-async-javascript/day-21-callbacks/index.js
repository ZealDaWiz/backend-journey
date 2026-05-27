function getMedicine(name, callback) {
           console.log(`Searching for ${name} ... `);
           callback(null, {name: name, price: 500});
}

  getMedicine('Ibuprofen', (error, medicine) => {
          if (error) {
            console.log('Error: ', error);
            return;
          }
           console.log('Found: ', medicine.name);
           console.log('Price: ', medicine.price);
});
