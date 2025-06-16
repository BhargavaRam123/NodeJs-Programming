// event-loop-phases.js
console.log('Script start');

// Microtask queue (highest priority)
process.nextTick(() => console.log('NextTick 1'));
Promise.resolve().then(() => console.log('Promise 1'));

// Timer phase
setTimeout(() => console.log('Timeout 1 - 0ms'), 0);
setTimeout(() => console.log('Timeout 2 - 10ms'), 10);

// Check phase (after I/O)
setImmediate(() => console.log('Immediate 1'));

// Microtask again
process.nextTick(() => console.log('NextTick 2'));
Promise.resolve().then(() => console.log('Promise 2'));

console.log('Script end');