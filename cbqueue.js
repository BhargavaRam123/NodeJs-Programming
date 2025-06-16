function createTaskQueue() {
    const queue = [];
    let isProcessing = false;
    
    function processQueue() {
      if (isProcessing || queue.length === 0) {
        return;
      }
      
      isProcessing = true;
      const task = queue.shift();
      
      task(() => {
        isProcessing = false;
        processQueue();
      });
    }
    
    return {
      addTask: function(task) {
        queue.push(task);
        processQueue();
      }
    };
  }
  
  const taskQueue = createTaskQueue();
  
  taskQueue.addTask(function(next) {
    console.log('Task 1 started');
    setTimeout(() => {
      console.log('Task 1 completed');
      next();
    }, 1000);
  });
  
  taskQueue.addTask(function(next) {
    console.log('Task 2 started');
    setTimeout(() => {
      console.log('Task 2 completed');
      next();
    }, 500);
  });