function fetchData(url, callback) {
    // Simulating a fetch operation
    setTimeout(function() {
      const data = { id: 1, name: 'Sample Data' };
      callback(data);
    }, 1000);
  }
  
  function processData(data) {
    console.log('Processing:', data.name);
  }
  
  fetchData('https://api.example.com/data', processData);