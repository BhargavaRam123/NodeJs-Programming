function delayedGreeting(name, callback) {
    setTimeout(function() {
      console.log('Hello ' + name);
      callback();
    }, 2000);
  }
  
  delayedGreeting('Sarah', function() {
    console.log('Delayed callback executed!');
  });