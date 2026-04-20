// ===== TASK 1 - Higher Order Function (map)  =====
let prices = [100, 200, 300, 400, 500];

let doublePrices = prices.map(function(price) {
    return price * 2;
});

console.log(prices);
console.log(doublePrices);

// ===== TASK 2 - Higher Order Function (filter)  =====
let scores = [45, 78, 32, 90, 55, 20];

let passedStudents = scores.filter(function(score) {
        return score >= 50; 
});

console.log(passedStudents);

// my thought process
let grades = [45, 78, 32, 90, 55, 20];

let passGrades = grades.filter(function(grade) {

         if ( grade >= 50) {
            return grade;
         }
});

console.log(passGrades);

// ===== TASK 3 - Passing a named function  =====
let nums = [45, 78, 32, 90, 55, 20];

function isPassing(score) {
         return score >= 50;
}

 let passed = nums.filter(isPassing);

console.log(passed);

// ===== TASK 4 - CHAINING =====
let students = [
    {name: "Zeal", score: 98},
    {name: "Timi", score: 45},
    {name: "Dani", score: 72},
    {name: "Kola", score: 30},
    {name: "Sade", score: 85}
];

let topStudents = students
     .filter(function(student) {
          return student.score >= 50;
   })
     .map(function(student) {
        return student.name + " scored " + student.score;
   });

console.log(topStudents);

