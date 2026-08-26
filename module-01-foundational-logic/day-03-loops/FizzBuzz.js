for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
       console.log("FizzBuzz", i);
} else if (i % 3 === 0) {
       console.log("Fizz", i);
}
 else if ( i % 5 === 0) {
      console.log("Buzz", i);
}
 else {
       console.log(i);
  }
}

/* This FizzBuzz challengw tests the knowledge of all exercises done in loops for day 3
 it Fizz when the number is a multiple or divisible by 3 and Buzz when it is for 5.
 Then log the number if it ia neither.
 === stands for  Strict Equality Operator
 && stands for And Operator.
 % stands for Remainder Operator. */
