
alert("Welcome to our website!");


let userName = prompt("Please enter your name:", "Guest");
if (userName) {
    console.log("Hello, " + userName + "!");
} else {
    console.log("No name provided.");
}



let userDecision = confirm("Do you want to proceed?");
if (userDecision) {
    console.log("User clicked OK");
} else {
    console.log("User clicked Cancel");
}