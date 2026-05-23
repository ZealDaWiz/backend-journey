const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout,
});

function askMedicine() {

        rl.question('Enter medicine name (or "done" to exit): ', (medicine) => {
                if (medicine === 'done') {
                  console.log('Goodbye');
                   rl.close();
                    return;
        }
          rl.question('Enter quantity: ', (quantity) => {
             rl.question('Requires prescription? (yes/no): ', (prescription) => {
              const record = `\n${medicine} - Quantity: ${quantity} - Prescription - ${prescription}`;
                fs.appendFileSync('record.txt', record, 'utf8');
                  console.log('Record saved successfully');
                    askMedicine();
             });
          });
       });
}

askMedicine();
