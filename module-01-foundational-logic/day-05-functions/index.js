// ===== PART 1 - Basic function =====
function greet(name) {
       console.log(`Hello ${name}, welcome to backend development`);
}

greet("Zeal");
greet("Lekan");
greet("Bolu");

// ===== PART 2 - Return Value =====
function calculatedAge(birthYear) {
     let age = 2026 - birthYear;
     return age;
}

let zealAge = calculatedAge(2002);
let lekanAge = calculatedAge(2003);
let boluAge = calculatedAge(1997);

console.log(`Zeal is ${zealAge} years old`);
console.log(`Lekan is ${lekanAge} years old`);
console.log(`Bolu is ${boluAge} years old`);

// ===== PART 3 - Grade function =====
function getgrade(score) {
     if (score >= 70) {
        return "A - Excellent";
     } else if (score >= 60) {
        return "B - Good";
     } else if (score >= 50) {
        return "C - Pass";
     } else if ( score >= 40) {
        return "D - Poor";
     } else {
        return "E - Fail";
     }
}

console.log(getgrade(95));
console.log(getgrade(72));
console.log(getgrade(55));
console.log(getgrade(40));
console.log(getgrade(20));

// ===== PART 4 - Everything Combined =====
function studentReport(name, birthYear, score) {
     let age = 2026 - birthYear;
     let grade = getgrade(score);

  return ` ===== STUDENT REPORT =====
  Name: ${name}
  Age: ${2026 - birthYear}
  Score: ${score}
  Grade: ${getgrade(score)}
======================================`
}

console.log(studentReport("Zeal Oyatokun", 2002, 72));

