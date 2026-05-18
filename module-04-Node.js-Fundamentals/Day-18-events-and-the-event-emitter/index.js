const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('batchReady', (batchInfo) => {
         console.log('Warehouse team received:', batchInfo.medicine);
         console.log('Quantity:', batchInfo.quantity);
});

emitter.emit('batchReady', {medicine: 'Amoxcillin', quantity: 500});
