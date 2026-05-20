const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('batchReady', (batchInfo) => {
          console.log(`Warehouse team received: ${batchInfo.medicine} — Quantity: ${batchInfo.quantity}`);
});

emitter.on('lowStock', (batchInfo) => {
          console.log(`ALERT: ${batchInfo.medicine} is running low. Only ${batchInfo.quantity} left.`);
});

emitter.emit('batchReady', {medicine: 'Amoxicillin', quantity: 500});
emitter.emit('lowStock', {medicine: 'Paracetamol', quantity: 10});

