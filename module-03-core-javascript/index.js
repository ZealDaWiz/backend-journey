// ===== TASK 1 - FUNCTION SCOPE =====
let country = "Nigeria";
function myCity() {
     let city = "Lagos";
     console.log(country);
     console.log(city);
}

myCity();
console.log(country);

// ===== TASK 2 - BLOCK SCOPE =====

if (true) {
      let mood = "focused";
        console.log(mood);
}


// ===== DIFFERENCE BTW let AND Var IN BLOCK =====
if (true) {
   var oldWay = "I use var";
   let newWay = "I use let";
}

console.log(oldWay);

// ===== TASK 3 - CLOSURES =====
function bankAccount() {
     let balance = 5000;
        console.log(balance);
}

bankAccount();

// ===== TASK 4 - HOW BANKING SYSTEM WORKS =====

function bankAccount() {
     let balance = 5000;

     function deposit(amount) {
      balance = balance + amount;
         console.log(balance);
     }

     return deposit;
}

let myAccount = bankAccount();
myAccount(2000);
myAccount(3000);


// ====== TasK 5 - CLOSURE CHALLENGE =====
function counter() {
    let count = 0;

   function increment () {
       count = count + 1;
       console.log(count);
   }

    return increment;
}

let myTotal = counter();
myTotal();
myTotal();
myTotal();

