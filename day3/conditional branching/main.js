
let score = 75;

if (score >= 70) {
    console.log("Passed");
} else {
    console.log("Failed");
}



let grade = 85;

if (grade >= 90) {
    console.log("A");
} else if (grade >= 80) {
    console.log("B");
} else if (grade >= 70) {
    console.log("C");
} else if (grade >= 60) {
    console.log("D");
} else {
    console.log("F");
}



let age = 20;
let message = age >= 18 ? "Adult" : "Minor";
console.log(message);



let username = "admin";
let password = "secure123";

if (username === "admin" && password === "secure123") {
    console.log("Access granted");
} else {
    console.log("Access denied");
}


let day = 3;
let dayName;

switch (day) {
    case 1: dayName = "Monday"; break;
    case 2: dayName = "Tuesday"; break;
    case 3: dayName = "Wednesday"; break;
    case 4: dayName = "Thursday"; break;
    case 5: dayName = "Friday"; break;
    default: dayName = "Weekend";
}
console.log(dayName);