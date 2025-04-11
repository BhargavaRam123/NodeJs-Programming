
let userName = "";
let defaultName = "Guest";
let displayName = userName || defaultName;
console.log(displayName); // "Guest" (because empty string is falsy)


let isLoggedIn = true;
let hasPermission = true;
let canAccess = isLoggedIn && hasPermission;
console.log(canAccess); // true (only if both are true)


let userInput = null;
let defaultValue = "Default";
let result = userInput ?? defaultValue;
console.log(result); // "Default" (because userInput is null)


let count = 0;
let fallbackCount = 10;
let displayCount = count || fallbackCount; // 10 (because 0 is falsy)
let actualCount = count ?? fallbackCount; // 0 (preserves 0 value)
console.log("OR result:", displayCount);
console.log("Nullish result:", actualCount);