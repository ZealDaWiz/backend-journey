// ===== TASK 1 - OBJECTS =====
let myProfile = {
    name: "Zeal",
    age: 24,
    city: "Lagos",
    occupation: "Quality analyst",
    hobby: "Researching",
    sport: "Football",
};

console.log(myProfile.name);
console.log(myProfile.age);
console.log(myProfile.occupation);
console.log(myProfile["hobby"]);
console.log(myProfile["city"]);
console.log(myProfile["sport"]);

// ===== TASK 2 - MODIFY OBJECTS =====
myProfile.occupation = "Backend developer";
myProfile.language = "JavaScript";

delete myProfile.sport;

console.log(myProfile.occupation);
console.log(myProfile["language"]);
console.log(myProfile.sport);

console.log(myProfile);

// ===== TASK 3 - ARRAY OF OBJECTS =====
let students = [
    {name: "Zeal", score: 98, age: 24},
    {name: "Nonye", score: 68, age: 22},
    {name: "Grace", score: 55, age: 21},
    {name: "Hero", score: 72, age: 26},
    {name: "Nelly", score: 42, age: 28},
];

for (let i = 0; i < students.length; i++) {
    console.log(`${students[i].name} scored ${students[i].score}`);
}

// ===== OBJECTS + FUNCTIONS =====
function getGrade(scores) {

      if (scores >= 70) {
         return `A - Excellent`;
 } else if (scores >= 60) {
         return `B - Good`;
 } else if (scores >= 50) {
        return `C - Pass`;
 } else if (scores >= 40) {
        return `D - Poor`;
 } else {
        return `E - Fail`;
 }
}

for (let i = 0; i < students.length; i++) {
    console.log(`${students[i].name} | ${students[i].age} | ${students[i].score} | ${getGrade(students[i].score)}`);
}
