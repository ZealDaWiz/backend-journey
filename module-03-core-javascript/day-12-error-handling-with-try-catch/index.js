// ===== TASK 1 - try/catch block =====
try {
    let result = 10/0;
     console.log(result);

} catch(error) {
    console.log("Something went wrong: " + error.message);
}

// ===== TASK 2 - Actual error try/catch =====

try {
    let user = null;
     console.log(user.name);
} catch(error) {
     console.log("Error caught: " + error.message);
} finally {
     console.log("This always run no matter what");
}

// ===== TASK 3 - throwing your own errors =====
function checkAge(age) {
         if (age < 18) {
            throw new Error("You must be 18 or older");
         }
       console.log("Access granted");
}
 try {
     checkAge(15);
} catch(error) {
         console.log("Blocked: " + error.message);
}
