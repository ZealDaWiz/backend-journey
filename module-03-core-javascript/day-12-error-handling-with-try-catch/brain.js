// ===== BRAIN.js CHALLENGE =====
let medicines = [
    {name: "Pyrantrin", quantity: 35, requiresPrescription: true},
    {name: "Tiocosid", quantity: 12, requiresPrescription: false},
    {name: "Amlovar" , quantity: 0, requiresPrescription: true},
];

function dispenseMedicine(medicineName, hasPrescription) {
     let found = medicines.filter(function(medicine) {
              return medicine.name === medicineName;
    });

     if (found.length === 0) {
         throw new Error("Medicine not found");
    }

    if (found[0].quantity === 0) {
         throw new Error("Out of stock");
    }

    if (found[0].requiresPrescription === true && hasPrescription === false) {
         throw new Error("Prescription required");
    } else {
          console.log(`Dispensing ${found[0].name}`);
    }
}

try {
    dispenseMedicine("Fakemedicine", true);
} catch(error) {
     console.log(error.message);
}

try {
    dispenseMedicine("Amlovar", true);
} catch(error) {
     console.log(error.message);
}

try {
    dispenseMedicine("Pyrantrin", false);
} catch(error) {
     console.log(error.message);
}

try {
    dispenseMedicine("Tiocosid", false);
} catch(error) {
    console.log(error.message);
}
