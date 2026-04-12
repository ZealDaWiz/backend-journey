const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter student score: ", function(answer) {
    let score = Number(answer);

    if (score >= 70) {
       console.log(`${score} - A: Excellent`);
    } else if  (score >= 60) {
       console.log(`${score} - B: Good`);
    } else if (score >= 50) {
       console.log(`${score} - C: Pass`);
    } else if (score >= 40) {
       console.log(`${score} - D: Poor`);
    } else {
       console.log(`${score} - E: Fail`);
    }

    rl.close();
});
