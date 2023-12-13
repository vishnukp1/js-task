function sumOfOddNumbersInRange(start, end) {
    let sum = 0;
  
    for (let i = start; i <= end; i++) {
      if (i % 2 !== 0) {
        // if (i % 2 !== 0) {
        
        sum += i;
      }
    }
  
    return sum;
  }
  
  // Example usage:
  console.log(sumOfOddNumbersInRange(1, 10)); // Output: 25 (1 + 3 + 5 + 7 + 9 = 25)
  console.log(sumOfOddNumbersInRange(5, 15)); // Output: 63 (5 + 7 + 9 + 11 + 13 + 15 = 60)
  