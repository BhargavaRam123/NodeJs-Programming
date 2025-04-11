
let userName = "";
let defaultName = "Guest";
let displayName = userName || defaultName;
console.log(displayName); // "Guest" (because empty string is falsy)