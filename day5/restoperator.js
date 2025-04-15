// Collecting remaining function arguments
function sum(first, ...others) {
    return others.reduce((total, num) => total + num, first);
  }
  sum(1, 2, 3, 4); // first = 1, others = [2, 3, 4]
  
  // Handling any number of arguments
  function logAll(...args) {
    args.forEach(arg => console.log(arg));
  }
  logAll('a', 'b', 'c'); // args = ['a', 'b', 'c']

  // Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

// Object destructuring
const { a, b, ...remaining } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a); // 1
console.log(b); // 2
console.log(remaining); // { c: 3, d: 4 }