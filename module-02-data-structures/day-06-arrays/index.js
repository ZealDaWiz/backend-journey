// ===== TASK 1 - CREATE AND ACCESS ARRAYS =====
let cities = ["Lagos","Abuja","Ibadan","Delta","Jos"];

console.log(cities[0]);
console.log(cities[2]);
console.log(cities[3]);

console.log(cities[cities.length - 1]);

// =====TASK 2 - MODIFIED ARRAY =====
let names = ["Nonye","Grace","Nelly","Hero"];
names[1] = "Lekan"
console.log(names);
names.push("Kike");
console.log(names);
names.shift();
console.log(names);

// ===== TASK 3 - ARRAY + LOOP =====
let scores = [95,72,55,23,42];

for (let i = 0; i < scores.length; i++) {
    console.log(`Position ${i + 1} : ${scores[i]}`);
}
// ===== FUNCTIONS =====
function getGrade (score) {

      if ( score >= 70) {
          return `A - Excellent`;
      } else if (score >= 60) {
          return `B - Good`;
      } else if (score >= 50) {
          return `C - Pass`;
      } else if (score >= 40) {
         return `D - Poor`;
      } else {
        return `E - Fail`;
      }
}

console.log(getGrade(75));
console.log(getGrade(62));
console.log(getGrade(53));
console.log(getGrade(43));
console.log(getGrade(32));

// ===== TASK 4 - ARRAY + FUNCTIONS =====
let studentNames = ["Zeal","Nonye","Nelly","Grace","Hero","Mirabel"];
let studentScores = [ 95,72, 68, 55, 43, 35];

for (let i = 0; i < studentNames.length; i++) {
    console.log(`StudentReport: ${studentNames[i]} - ${getGrade(studentScores[i])}`);
}
