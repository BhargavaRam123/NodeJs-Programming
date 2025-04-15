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