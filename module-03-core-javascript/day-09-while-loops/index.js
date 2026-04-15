// ===== TASK I - BASIC WHILE LOOP =====
let count = 1;

while (count <= 10) {
    console.log(`Count: ${count}`);
    count++;
}

// ===== TASK 2 - do... while loop =====
let countdown = 20;
 do {
   console.log(`Countdown: ${countdown}`);
   countdown --;
}

 while (countdown >= 1);

// ===== TASK 3 - BREAK =====
let counts = 1; 

while ( counts <=  100) {
   if ( counts % 3 === 0 && counts % 7 === 0) {
    break;
   }
      console.log(counts);
      counts ++;
}

// ===== TASK 4 - continue =====
for (let i = 1; i <= 20;  i++) {
    if ( i % 3 === 0) {
     continue;
   }
     console.log(i);
}

// ===== TASK 5 - REAL WORLD WHILE LOOP =====
let correctPassword = "backend2026";
let passwords = ["Wrong1", "backend2026", "Wrong2"];
let  i = 0;
 while ( i < passwords.length) {

let currentAttempt = passwords[i];

   if ( currentAttempt === correctPassword) {
      console.log("Access granted");
      break;
  }

   else {

      console.log("Wrong Password, try Again");
  }

      i++;

}
