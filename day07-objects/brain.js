let hospital = {
    name:"University college hospital",
    location: "Lagos",
    patients: [
    {name: "Zara", age: 22, diagnosis: "ulcer"},
    {name: "Jack", age: 24, diagnosis: "malaria"},
    {name: "Rob", age: 21, diagnosis: "fever"}
   ],
   addPatient: function(name, age, diagnosis) {
     hospital.patients.push({name: "Micheal", age:32, diagnosis: "Typhoid"});
   },
   getPatient: function (name) {
        for (let i = 0; i < hospital.patients.length; i++) {
         if (hospital.patients[i].name === name) {
             return hospital.patients[i];
         }
       }
   }
};

hospital.addPatient("Micheal", 32, "Typhoid");

console.log(hospital.getPatient("Zara"));
console.log(hospital.getPatient("Micheal"));

console.log(hospital.patients);
