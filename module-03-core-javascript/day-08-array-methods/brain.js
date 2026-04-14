let products = [
    {name: "Paracetamol", price: 500, inStock: true},
    {name: "Amoxicillin", price: 1500, inStock: false},
    {name: "Vitamin C", price: 800, inStock: true},
    {name: "Ibuprofen", price: 600, inStock: false},
    {name: "Zinc", price: 400, inStock: true}
];

let allProducts = products.filter(function(product) {
    return product.inStock === true;
});

console.log(allProducts);

let logbook = allProducts.map(function(products) {
    return`${products.name} - NGN ${products.price}`;
});

console.log(logbook);
