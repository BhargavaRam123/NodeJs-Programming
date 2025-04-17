function calculate(num1, num2, callback) {
    callback(num1, num2);
  }
  
  calculate(5, 3, function(a, b) {
    console.log('Sum: ' + (a + b));
  });