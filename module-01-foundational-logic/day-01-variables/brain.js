let name = "Zeal";
let year = 2026;
let birthYear = 2002;

let age = year - birthYear;

console.log("Hello " + name);
console.log("You are " + age + " years old");

/* name is a variable that contains string "Zeal". so is year and birthyear.
 To get the age, the birthYear is subtracted from the current year but this
 "HARDCODED".
Therefore, when you console.log, you use concatenate to join your intent with the
variable containing string (value) e.g name contains "Zeal", as it us assigned to it
by an assignment operator (=). 

To make your code more dynamic, tou coukd write it using Javascript built-in
Date object as shown below: */

let currentYear = new Date().getFullYear();

 age = currentYear - birthYear;

/* Note: let is used in declaring a variable. the use of let was ignored when 
 Reassinging the age box with dynamic calculation. */

console.log("Your dynamic age is " + age + " years old");

/* There is usually a space between your intent word and your variable when using
 concatenation in your console.log. This is to ensure that there is adequate spacing
 when your program is being run. */
