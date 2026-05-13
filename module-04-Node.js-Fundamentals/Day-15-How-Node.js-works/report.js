const report = require('./medicines');
const generateReport = (medicines) => {
     medicines.forEach((medicine) => {
      console.log(`medicine: ${medicine.name} | price: NGN ${medicine.price} | quantity: ${medicine.quantity} | Require Prescription: ${medicine.hasPrescription}`);
 });
}

module.exports = {generateReport};
