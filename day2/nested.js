// nested-microtasks.js
console.log('Script start');

Promise.resolve().then(() => {
  console.log('Promise 1');
  
  // Nested microtasks
  process.nextTick(() => {
    console.log('NextTick inside Promise 1');
    
    process.nextTick(() => {
      console.log('Nested NextTick');
    });
  });
  
  Promise.resolve().then(() => {
    console.log('Promise inside Promise 1');
    
    Promise.resolve().then(() => {
      console.log('Nested Promise');
    });
  });
});

setTimeout(() => console.log('Timeout 1'), 0);
setImmediate(() => console.log('Immediate 1'));

console.log('Script end');