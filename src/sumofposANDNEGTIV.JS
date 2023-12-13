function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) {
      return [];
    }
  
    let countPositives = 0;
    let sumNegatives = 0;
  
    for (let number of input) {
      if (number > 0) {
        countPositives++;
      } else if (number < 0) {
        sumNegatives += number;
      }
    }
  
    return [countPositives, sumNegatives];
  }
  
  // Example usage:
  const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
  console.log(countPositivesSumNegatives(inputArray)); // Output: [10, -65]
  