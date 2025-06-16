// Combining arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Copying arrays
const original = [1, 2, 3];
const copy = [...original]; // Creates a new array: [1, 2, 3]

// Passing elements as arguments
function sum(a, b, c) {
  return a + b + c;
}
const numbers = [1, 2, 3];
sum(...numbers); // Equivalent to sum(1, 2, 3)

// Merging objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }

// Cloning objects
const original1 = { x: 1, y: 2 };
const clone = { ...original1 }; // { x: 1, y: 2 }

// Override properties
const base = { a: 1, b: 2 };
const override = { ...base, b: 3 }; // { a: 1, b: 3 }