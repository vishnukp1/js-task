function powerRecursive(x, n) {
    if (n === 0) {
      return 1;
    } else if (n < 0) {
      // If n is negative, calculate the reciprocal and continue recursion
      return 1 / (x * powerRecursive(x, -n - 1));
    } else {
      return x * powerRecursive(x, n - 1);
    }
  }
  
  // Example usage:
  const x = 2;
  const n = 3;
  const result = powerRecursive(x, n);
  console.log(result); // Output: 8
  