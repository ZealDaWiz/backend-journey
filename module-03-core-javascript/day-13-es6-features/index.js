// ===== ES6 FEATURES =====

// ===== NORMAL FUNCTION =====
function add(a, b) {
     return a + b;
}

console.log(add(5, 3));

// ===== ARROW FUNCTION - VERSION 1 =====
const addition = (a, b) => {
     return a + b;
}

console.log(addition(6, 2));

// ===== ARROW FUNCTION - VERSION 2 =====
const plus = (a, b) => a + b;

console.log(plus(4,6));

// ===== DESTRUCTURING =====
let person = {
    name: "Zeal",
    age: 24,
    city: "Abuja",
};

let {name, age, city} = person;

console.log(name);
console.log(age);
console.log(city);

// ===== DESTRUCTURING ARRAYS =====
let scores = [98,72, 55];

let [first, second, third] = scores;

console.log(first);
console.log(second);
console.log(third);

// ===== SPREAD OPERATOR =====
let firstBatch = ["Zeal", "Timi", "Dani"];
let secondBatch = ["Kola", "Sade", "Bayo"];

let allStudents = [...firstBatch, ...secondBatch];

console.log(allStudents);

// ===== DEFAULT PARAMETERS =====
function greetUser(name = "Guest") {
       console.log(`Welcome ${name}`);
}

greetUser("Zeal");
greetUser();
