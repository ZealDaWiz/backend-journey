const {medicines, findMedicine, os} = require('./medicines');
const {generateReport} = require('./report');

generateReport(medicines);

try {
  findMedicine(medicines, "Unaben");
} catch(error) {
     console.log("Error caught:" + error.message);
}

try {
  findMedicine(medicines, "Fake Medicine");
} catch(error) {
     console.log("Error caught:" + error.message);
}
