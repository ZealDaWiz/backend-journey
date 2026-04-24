//===== PATIENT REGISTRATION SYSTEM =====
let patients = [
    {name: "Tony", age: 22, condition: "Malaria"},
    {name: "Alisson", age: 23, condition: "Fever"},
    {name: "Jacob", age: 25, conditon: "Migraine"},
];

const registerPatient = patient => {

let {name, age, condition = "General Checkup"} = patient;

console.log(`Registering ${name}, Age: ${age}, Condition: ${condition}`);

}

let newPatients = [
    {name: "Bella", age: 28, condition: "Typhoid"},
    {name: "Jake", age: 30, condition: "Sickle cell"},
];

let allPatients = [...patients, ...newPatients];

allPatients.forEach(function(patient) {
    registerPatient(patient);
});
