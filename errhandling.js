function divide(a, b, callback) {
    if (b === 0) {
      callback(new Error('Cannot divide by zero'));
      return;
    }
    callback(null, a / b);
  }
  
  divide(10, 2, function(error, result) {
    if (error) {
      console.error('Error:', error.message);
    } else {
      console.log('Result:', result);
    }
  });