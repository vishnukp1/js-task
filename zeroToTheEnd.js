function moveZerosToEnd(arr) {
    const result = [];
    let zeroCount = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        result.push(arr[i]);
      } else {
        zeroCount++;
      }
    }
  
    // Append zeros to the end of the result array
    for (let i = 0; i < zeroCount; i++) {
      result.push(0);
    }
  
    return result;
  }
  
  // Example usage:
  const arr = [0, 2, 0, 4, 6, 0, 8, 0];
  const modifiedArray = moveZerosToEnd(arr);
  console.log(modifiedArray); // Output: [2, 4, 6, 8, 0, 0, 0, 0]
  