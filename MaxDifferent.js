function maxDifference(arr) {
    if (arr.length < 2) {
      return "Array should contain at least two elements";
    }
  
    const max = Math.max(...arr);
    const min = Math.min(...arr);
  
    return max - min;
  }
  
  // Example usage:
  const myArray = [2, 7, 1, 5, 9, 3];
  const difference = maxDifference(myArray);
  
  console.log("Maximum Difference:", difference);
  