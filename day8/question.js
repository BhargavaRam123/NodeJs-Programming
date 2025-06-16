function prioritySort(input, priority) {
    
    const result = [];
    
    for (const priorityItem of priority) {
      for (let i = 0; i < input.length; i++) {
        if (input[i] === priorityItem) {
          result.push(input[i]);
        }
      }
    }
    
    const remaining = input.filter(item => !priority.includes(item));
    
    remaining.sort((a, b) => a - b);
    
    result.push(...remaining);
    
    return result;
  }
  

  const input = [2, 1, 3, 2, 1, 8, 8];
  const priority = [2, 3, 8];
  console.log(prioritySort(input, priority)); 