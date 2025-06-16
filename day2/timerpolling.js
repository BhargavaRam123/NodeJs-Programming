const fs = require('fs');

// Create a situation where timer and check phases might compete
fs.readFile(__filename, () => {
  console.log('I/O operation completed');
  
  // The order of these two can vary depending on system load
  setTimeout(() => console.log('Timeout after I/O'), 0);
  setImmediate(() => console.log('Immediate after I/O'));
});

// This demonstrates how timing can be unpredictable
for (let i = 0; i < 5; i++) {
  // These two will have inconsistent ordering outside of I/O callbacks
  setTimeout(() => console.log(`Timeout ${i}`), 0);
  setImmediate(() => console.log(`Immediate ${i}`));
}

console.log('Main script executed');