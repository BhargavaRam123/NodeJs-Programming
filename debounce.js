function debounce(callback, delay) {
    let timeoutId;
    
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        callback.apply(this, args);
      }, delay);
    };
  }
  
  const debouncedSearch = debounce(function(query) {
    console.log('Searching for:', query);
  }, 300);
  
  // Usage
  debouncedSearch('apple');
  debouncedSearch('apple p'); // Previous call is canceled
  debouncedSearch('apple pie'); // Only this one executes after delay