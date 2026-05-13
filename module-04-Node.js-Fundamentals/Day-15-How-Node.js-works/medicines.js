const os = require ('os');
const medicines = [
      {name: "Pancemol", price: 1000, quantity: 250, hasPrescription: false},
      {name: "Pyrantrin", price: 500, quantity: 500, hasPrescription: true},
      {name: "Norduet", price: 3000, quantity: 50, hasPrescription: true},
      {name: "Amlovar", price: 800, quantity: 150, hasPrescription: false},
      {name: "Unaben", price: 2500, quantity: 45, hasPrescription: true}
];

const findMedicine = (medicines, medicineName)  => {
const found = medicines.filter((medicine) => {
  return medicine.name === medicineName;
});

 if (found.length === 0) {
  throw new Error("Medicine not found");
 }
}

module.exports = {medicines, findMedicine, os};
