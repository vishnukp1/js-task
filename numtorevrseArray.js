function numberToReversedArray(number) {
   
    const numberStr = number.toString();
  
    // .map(Number)
    const reversedArray = numberStr.split('').reverse().map(Number)
    return reversedArray;
  }
  
  // Example usage:
  const num = 12345;
  console.log(numberToReversedArray(num)); // Output: [5, 4, 3, 2, 1]
  