function countTrue(arr) {
    return arr.filter(item => item === true).length;
  }
  
  // Test cases
  console.log(countTrue([true, false, false, true, false]));  // Output: 2
  console.log(countTrue([false, false, false, false]));        // Output: 0
  console.log(countTrue([]));                                 // Output: 0
  