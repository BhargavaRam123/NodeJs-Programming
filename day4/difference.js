// setInterval example
function testSetInterval() {
    setInterval(() => {
      alert("setInterval alert");
    }, 2000);
  }
  
  // Nested setTimeout example
  function testNestedTimeout() {
    function step() {
      alert("setTimeout alert");
      setTimeout(step, 2000);
    }
    setTimeout(step, 2000);
  }
  
  // Run either:
  testSetInterval();
  // or
  // testNestedTimeout();