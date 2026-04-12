// ===== BMI CALCULATOR =====
function bmi(weight, height) {
     let BMI = weight / (height * height);

  if (BMI <= 18.4) {
     return `BMI: ${BMI} - Underweight`;
  } else if (BMI >= 18.5 && BMI <= 24.9) {
     return `BMI: ${BMI} - Normal weight`;
  } else if (BMI >= 25 && BMI <= 29.9) {
     return `BMI: ${BMI} - Overweight`;
  } else {
     return `BMI: ${BMI} - Obese`;
  }
}

console.log(bmi(43, 1.75));
console.log(bmi(55, 1.77));
console.log(bmi(66,1.75));
console.log(bmi(120, 1.65));


