const fs = require('fs');

function findPatient(name, callback) {
      if (name === 'Zeal') {
         callback(null, {name: name, age: 24, diagnosis: 'cold'});
         return;
      }
       callback(new Error('Name not found'), null);
}

function savePatient(patient, callback) {
    const newPatient = `\nPatient 1: ${patient.name} - Age: ${patient.age} - Diagnosis: ${patient.diagnosis}`;
      fs.appendFileSync('patient.txt', newPatient, 'utf8');
           console.log('File successfully updated');

        callback(null, 'Patient Saved Successfully');
}

findPatient('Zeal', (error, patient) => {
        if (error) { console.log('Error:', error.message); return; }
     savePatient(patient, (error, patient) => {
            if (error) { console.log('Error:', error.message); return; }
               console.log(patient);
     });
});

findPatient('Zaara', (error, patient) => {
        if (error) { console.log('Error:', error.message); return; }
     savePatient(patient, (error, patient) => {
             if (error) { console.log('Error:', error.message); return; }
                console.log(patient);
     });
});

