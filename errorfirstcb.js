function readFile(path, callback) {
    // Simulate file reading
    setTimeout(() => {
      const randomSuccess = Math.random() > 0.2;
      if (randomSuccess) {
        callback(null, 'File content here');
      } else {
        callback(new Error('Failed to read file'));
      }
    }, 1000);
  }
  
  readFile('/path/to/file.txt', function(error, data) {
    if (error) {
      console.error('Error reading file:', error.message);
      return;
    }
    console.log('File content:', data);
  });