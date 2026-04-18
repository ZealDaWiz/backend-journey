let student = [
    {name: "Zeal", score: 98},
    {name: "Timi", score: 72},
    {name: "Dani", score: 30},
  ];

function gradeTracker() {
     let passCount = 0;

   function evaluate(student) {

         if (student.score >= 50) {
           console.log(`${student.name}, ${student.score} : passed`);
                passCount = passCount + 1
         }

         if (student.score < 50) {
           console.log(`${student.name}, ${student.score} : failed`);
         }
   }

             student.forEach(function(student, index) {
                 evaluate(student);
    });
             console.log(passCount);
             return evaluate;
}

let studentReport = gradeTracker();
studentReport(student);
