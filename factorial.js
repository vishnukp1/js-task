function factorialRecursive(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorialRecursive(n - 1);
    }
  }
  
  // Example usage:
  const number = 4;
  const result = factorialRecursive(number);
  console.log(result); // Output: 120
  