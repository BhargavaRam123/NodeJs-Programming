// Using an IIFE
(function() {
    var secret = "hidden value";
    // secret only exists inside this function
  })();
  
  
  // Vs. normal function
  function normalFunction() {
      var secret = "hidden value";
    }
    normalFunction();
  // Still can't access secret, but the function name remains in global scope