let worker = {
    someMethod() {
      return 1;
    },
  
    slow(x) {
      alert("Called with " + x);
      return x * this.someMethod(); // (*)
    }
  };
  
  function cachingDecorator(func) {
    let cache = new Map();
    return function(x) {
      if (cache.has(x)) {
        return cache.get(x);
      }
      let result = func.call(this, x); // "this" is passed correctly now
      cache.set(x, result);
      return result;
    };
  }
  
  worker.slow = cachingDecorator(worker.slow); // now make it caching
  
  alert( worker.slow(2) ); // works
  alert( worker.slow(2) ); // works, doesn't call the original (cached)