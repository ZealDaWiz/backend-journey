// ===== PART 1 - const vs let =====
const name ="Zeal Oyatokun";
const birthYear = 2002;
const country = "Nigeria";
let mood = "Focused";
let currentYear = 2026;

// ===== PART 2 - Template literals =====
console.log(`You are ${name} `);
console.log(`You are ${currentYear - birthYear} years old`);
console.log(`You are from ${country}`);
console.log(`You are a ${mood} individual`);
console.log(`${name} is  ${currentYear - birthYear} years old and currently feeling ${mood}`);

// ===== PART 3 - Grade System  =====
let score = 70;

if (score >= 70) {
   console.log("A - Excellent");
} else if (score >= 60) {
        console.log("B - Good");
} else if (score >= 50) {
        console.log("C - Pass");
} else if (score >= 40) {
        console.log("D - Poor");
} else {
      console.log("E - Fail");
}

// ===== PART 4 - Grade System Upgrade =====
const scores = [95, 72, 55, 43, 20];

for (let i = 0; i < scores.length; i++) {
    let score = scores[i];

    if (score >= 70) {
       console.log(`${score} - A: Excellent`);
    } else if (score >= 60) {
       console.log(`${score} - B: Good`);
    } else if (score >= 50) {
       console.log(`${score} - C: Pass`);
    } else if (score >= 40) {
       console.log(`${score} - D: Poor`);
    } else {
       console.log(`${score} - E: Fail`);
    }
}
