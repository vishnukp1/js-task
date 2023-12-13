function sumOfTwoLowestPositiveNumbers(arr) {
 
    const positiveNumbers = arr.filter((num) => num > 0);
  

    positiveNumbers.sort((a, b) => a - b);
 
    const sum = positiveNumbers[0] + positiveNumbers[1];
  
    return sum;
  }
  
  // Example usage:
  console.log(sumOfTwoLowestPositiveNumbers([19, 5, 42, 2, 77])); // Output: 7
  console.log(sumOfTwoLowestPositiveNumbers([10, 343445353, 3453445, 3453545353453])); // Output: 3453455

  