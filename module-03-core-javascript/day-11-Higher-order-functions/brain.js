let medicines = [
    {name: "Pyrantin", price: 500, quantity: 50},
    {name: "Hemafolin", price: 300, quantity: 35},
    {name: "Norduet", price: 1000, quantity: 7},
    {name: "Amlovar", price: 600, quantity: 15},
    {name: "Obron-6", price: 1200, quantity: 4},
    {name: "Pancemol", price: 2000, quantity: 2}
];

let stockReport = medicines
    .filter(function(medicine) {
       return medicine.quantity > 10;
  })
    .map(function(medicine) {
      return medicine.name + " costs NGN " + medicine.price + " and has " + medicine.quantity + " units left ";
  });

console.log(stockReport);

function stockTracker() {
     let inStock = 0;

      function addStock(stockReport) {
      inStock = inStock + 1
    }
       stockReport.forEach(function(medicine, index) {
          addStock(medicine);
});
      console.log(inStock);
         return addStock
}

let total = stockTracker();
