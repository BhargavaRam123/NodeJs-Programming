(function() {
    // Variables defined here are not accessible outside
    var privateVar = "I'm private";
    
    // This function isn't accessible outside either
    function privateFunction() {
      console.log("This is private too");
    }
    
    // Code inside can access both
    console.log(privateVar);
    privateFunction();
  })();
  

  // Problem with closures in loops
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i); // Will log "3" three times
    }, 100);
  }
  
  // Solution using IIFE
  for (var i = 0; i < 3; i++) {
    (function(index) {
      setTimeout(function() {
        console.log(index); // Will log 0, 1, 2
      }, 100);
    })(i);
  }