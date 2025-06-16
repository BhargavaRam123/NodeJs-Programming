function throttle(callback, interval) {
    let isThrottled = false;
    
    return function(...args) {
      if (!isThrottled) {
        callback.apply(this, args);
        isThrottled = true;
        setTimeout(() => {
          isThrottled = false;
        }, interval);
      }
    };
  }
  
  const throttledScroll = throttle(function() {
    console.log('Scroll event handled');
  }, 1000);
  
  // Usage (simulating multiple scroll events)
  throttledScroll();
  throttledScroll(); // Ignored
  throttledScroll(); // Ignored