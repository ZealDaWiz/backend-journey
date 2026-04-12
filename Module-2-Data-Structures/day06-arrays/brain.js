function classReport(scores) {
     let highest = 0;
     let lowest = 100;
     let total = 0;

    for ( let i = 0; i < scores.length; i++) {

      if (scores[i] > highest) {
         highest = scores[i];
      }

      if (scores[i] < lowest) {
         lowest = scores[i];
      }

      total = total + scores[i];
      }

     let average = total/scores.length;

  return `Highest: ${highest}, Lowest: ${lowest}, Average: ${average}`;
}

console.log(classReport([94, 72, 68, 54, 42, 30]));
