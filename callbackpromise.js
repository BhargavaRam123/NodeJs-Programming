function fetchData(url) {
    return new Promise((resolve, reject) => {
      // Simulating fetch
      setTimeout(() => {
        const success = true; // Simulate success/failure
        if (success) {
          resolve({ id: 1, name: 'Data' });
        } else {
          reject(new Error('Failed to fetch data'));
        }
      }, 1000);
    });
  }
  
  fetchData('https://api.example.com/data')
    .then(data => {
      console.log('Data received:', data);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });