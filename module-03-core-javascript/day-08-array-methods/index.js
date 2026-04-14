// ===== TASK 1 - forEach ARRAY METHOD =====
let cities = ["Lagos", "Abuja", "Ibadan", "Jos", "Kano"];
 cities.forEach(function(city, index) {
      console.log(`${index + 1}. ${city}`);
 });

// ===== TASK 2 - map ARRAY METHOD =====
let prices = [500, 1000, 1500, 2000, 2500];
let discountedPrice = prices.map(function(price) {
   return price - (price * 0.10);
});

console.log(prices);
console.log(discountedPrice);

// ===== TASK 3 -filter ARRAY METHODS =====
let scores = [95, 68, 22, 45, 50, 34];
let passed = scores.filter(function(score) {
    return score >= 50;
});

let failed = scores.filter(function(score) {
    return score < 50;
});

console.log(passed);
console.log(failed);

// ===== TASK 4 - map + filter =====
let students = [
    {name: "Zeal", score: 99},
    {name: "Bola", score: 89},
    {name: "Tife", score: 68},
    {name: "Temi", score: 55},
    {name: "Tola", score: 42},
    {name: "Sade", score: 22}
   ];

let pass = students.filter(function(student) {
    return student.score >= 50;
});

console.log(pass);

let results = pass.map(function(student) {
   return`${student.name} - ${student.score}`;
});

console.log(results);
