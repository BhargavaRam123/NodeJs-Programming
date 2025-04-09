// io-events-order.js
const fs = require('fs');

console.log('Start');

// Timer phase
setTimeout(() => console.log('Timeout 1'), 0);

// I/O phase
fs.readFile(__filename, () => {
  console.log('File read completed');
  
  // This immediate will run after the I/O callback completes
  setImmediate(() => console.log('setImmediate inside I/O'));
  
  // This will be added to the timer queue
  setTimeout(() => console.log('setTimeout inside I/O'), 0);
  
  // This will be executed before returning to the event loop
  process.nextTick(() => console.log('nextTick inside I/O'));
});

// Check phase
setImmediate(() => console.log('setImmediate outside I/O'));

console.log('End');