//===== Recovery Session— Days 21-25 Condensed =====

// 1.  Callbacks (Day 21)
//     A callback is a function inside another function that is being called inside that function. 
//     A callback can be written using arrow function syntax: (error, data) => {}
//     But a callback is a concept (function passed to another function),
//     not the same as an arrow function.

function getMedicine (name, callback) {
      if (name === 'Unknown') {
         callback (new Error('Medicine not found'), null);
         return;
      }
         callback (null, {name:  name, price: 500});
}

//    Callback is usually  callback(error, data) in its usual convention. 
//    Always two arguments, always error first. Pass null for whichever slot doesn't apply.
//    This keeps the structure consistent so the receiver always knows what to expect.

getMedicine ('Amlovar', (error, medicine) => {
         if (error) {
            console.log('Error:', error.message);
            return;
         }
            console.log('Found:', medicine.name, '- Price:', medicine.price);
});

// The hypen '-' before Price is just a string inside console.log to make the printed output cleaner to read.

getMedicine ('Unknown', (error, medicine) => {
         if (error) {
            console.log('Error:', error.message);
            return;
         }
            console.log('Found:', medicine.name);

});


// 2.  Promises (Day 22)
//     A Promise represent a value that will arrive in the future.
//     It has three states: pending, resolved (fufilled), rejected.

const findMedicine = (name) => {
 return new Promise((resolve, reject) => {
   const medicines = ['Amlovar', 'Pyrantrin', 'Unaben'];
      if (medicines.includes(name)) {
        resolve({name: name, price: 700});
      } else {
        reject(new Error('Medicine not found'));
      }
  });
};

// const findMedicine = ... is a variable declaration — and variable declarations end with 
// a semicolon, just like const x = 5;.
// Regular function declarations don't need this. 
// This is another small difference between the two styles.

findMedicine('Amlovar') 
   .then(medicine => console.log('Promise resolved:', medicine.name))
   .catch(error => console.log('Promise rejected:', error.message));

findMedicine('fakeMed')
   .then(medicine => console.log('Promise fulfilled:', medicine.name))
   .catch(error => console.log('Promise rejected:', error.message));

//    .includes(value) checks if a value exists in an array. Returns true or false.
//    .then() runs on Promise success (resolve).
//    .catch() runs on Promise failure (reject).
//    Arrow function expressions: const fn = (param) => {} — modern standard for writing functions.


// 3. Async/Await (Day 23)
//    Async/await is just Promises with cleaner syntax. 
//    Instead of chaining .then() and .catch(), you write it like normal sequential code 
//    using try/catch.

// await pauses the function until the Promise resolves or rejects.
// try/catch replaces .then() and .catch()

async function orderMedicine(name) {
  try {
    const medicine = await findMedicine(name);
    console.log('Async/Await resolved:', medicine.name, '- Price:', medicine.price);
  } catch (error) {
          console.log('Async/Await caught:', error.message);
  }
}

orderMedicine('Pyrantrin');
orderMedicine('fakeMed');

// Arrow style → const orderMedicine = async (name) => {} → async moves close to the parameters
// Regular style → async function orderMedicine(name) {} → async stays before function
// Without async → const orderMedicine = (name) => {} → just a regular variable declaration holding a function


// 4. Fetch + Error Handling (Day 24 — Day 25)
// fetch() makes HTTP requests 
