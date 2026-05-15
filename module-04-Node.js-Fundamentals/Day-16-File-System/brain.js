const fs = require('fs');
console.log('Before reading file');

fs.readFile('patients.txt', 'utf8', (error, data) => {
        if (error) {
           console.log('Error:' , error.message);
            return;
        }
         console.log(data);

const newPatient = '\nPatient 6: Marie - Fever';
fs.appendFileSync('patients.txt', newPatient, 'utf8');
   console.log('File updated.');

fs.readFile('patients.txt', 'utf8', (error, data) => {
        if (error) {
           console.log('Error:' , error.message);
            return;
        }
         console.log(data);
  });
});

console.log('After reading file');
