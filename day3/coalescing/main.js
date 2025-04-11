
let userName = "";
let defaultName = "Guest";
let displayName = userName || defaultName;
console.log(displayName); // "Guest" (because empty string is falsy)


let isLoggedIn = true;
let hasPermission = true;
let canAccess = isLoggedIn && hasPermission;
console.log(canAccess); // true (only if both are true)