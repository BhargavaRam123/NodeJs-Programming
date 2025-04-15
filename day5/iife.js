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
  
