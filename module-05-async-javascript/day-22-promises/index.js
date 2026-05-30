const getMedicine = (name) => {
   return new Promise((resolve) => {
    resolve({name: name, price: 500});
  });
};

Promise.all([
  getMedicine('Amlovar'),
  getMedicine('Pyrantrin'),
  getMedicine('Unaben'),
]).then(medicines => {
     medicines.forEach(m => console.log(m.name, '-', m.price));
}).catch(error => console.log('Error:', error.message));
