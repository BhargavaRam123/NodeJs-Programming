function fetchMultipleData(callback) {
    let results = [];
    let completed = 0;
    
    function checkComplete() {
      completed++;
      if (completed === 3) {
        callback(results);
      }
    }
    
    // Simulating 3 parallel async operations
    setTimeout(() => {
      results[0] = 'Data 1';
      checkComplete();
    }, 1000);
    
    setTimeout(() => {
      results[1] = 'Data 2';
      checkComplete();
    }, 800);
    
    setTimeout(() => {
      results[2] = 'Data 3';
      checkComplete();
    }, 1200);
  }
  
  fetchMultipleData(function(data) {
    console.log('All data received:', data);
  });